import { call, put, takeEvery, ForkEffect, select } from 'redux-saga/effects';
import { types, actions as postActions } from '../actions/post';
import { actions as userActions } from '../actions/user';
import { CreatePostProp } from '../scenes/createPost';
import { FeedProp } from '../scenes/feed';
import {
  getPosts,
  getPostDetails,
  likePost,
  dislikePost,
  createPost,
} from '../services/posts';
import { Action, State } from '../types/common';
import { Post } from '../types/post';
import { UserState } from '../types/user';
import { POST_LIMIT_PER_REQUEST } from '../utils/constants';

function* onGetPosts(action: Action) {
  try {
    const { limit, offset, fromStart } = action.payload!;
    const city: string = yield select((state: State) => state.user.city);
    const { data } = yield call(
        getPosts,
        limit as number,
        offset as number,
        city as string,
    );

    const currentPosts: Post[] = yield select((state: State) => state.post.posts);
    const posts = fromStart ? data.posts : [...currentPosts, ...data.posts];
    yield put(postActions.setPosts(posts));
  } catch (e) {
    yield put(postActions.error());
  }
}

function* onLikedPost(action: Action) {
  try {
    const { postId, isDislike } = action.payload!;
    const endpoint = isDislike ? dislikePost : likePost;

    yield call(endpoint, postId as string);
    const currentPosts: Post[] = yield select((state: State) => state.post.posts);

    const userState: UserState = yield select((state: State) => state.user);
    const user = userState.user!;
    if (isDislike)
      user.likedPosts = user.likedPosts.filter((id: string) => id !== postId);
    else
      user.likedPosts.push(postId as string);

    yield put(userActions.setUserData(user));
    yield put(postActions.getPost(postId as string));
    yield put(postActions.getPosts(currentPosts.length, 0, true));
  } catch (e) {
    yield put(postActions.error());
  }
}

function* onOpenPostPage(action: Action) {
  const { postId, navigation } = action.payload!;
  yield put(postActions.getPost(postId as string));
  (navigation as FeedProp).navigate('Post');
}

function* onGetPostDetails(action: Action) {
  try {
    const { postId } = action.payload!;
    if (postId) {
      const { data } = yield call(getPostDetails, postId as string);
      yield put(postActions.setCurrentPost(data.post as Post));
    }
  } catch (e) {
    yield put(postActions.error());
  }
}

function* onCreatePost(action: Action) {
  try {
    const { navigation, text, colorCode, textColor } = action.payload!;
    const userState: UserState = yield select((state: State) => state.user);
    yield call(
      createPost,
      text as string,
      colorCode as string,
      textColor as string,
      userState.location!.coordinates,
    );
    yield put(postActions.getPosts(POST_LIMIT_PER_REQUEST, 0, true));
    (navigation as CreatePostProp).navigate('Feed');
  } catch (e) {
    yield put(postActions.error());
  }
}

export default function* watchUser(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(types.GET_POST, onGetPostDetails);
  yield takeEvery(types.GET_POSTS, onGetPosts);
  yield takeEvery(types.LIKE_POST, onLikedPost);
  yield takeEvery(types.OPEN_POST_PAGE, onOpenPostPage);
  yield takeEvery(types.CREATE_POST, onCreatePost);
}
