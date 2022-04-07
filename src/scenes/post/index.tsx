import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import { State } from '../../types/common';
import Post from '../../components/organisms/Post';
import { actions as postActions } from '../../actions/post';
import { Comment } from '../../types/comment';
import CloseButton from '../../components/atoms/CloseButton';
import CommentSection from '../../components/organisms/CommentSection';

export type PostProp = NativeStackNavigationProp<LoggedStackParamList, 'Post'>;

type Props = {
    navigation: PostProp;
};

const PostScreen = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const post = useSelector((state: State) => state.post.currentPost)!;

    const onLiked = useCallback(() => {
        dispatch(postActions.likePost(post?._id, post?.likedByUser));
    }, [post, dispatch]);

    return (
        <View style={styles.view}>
            <CloseButton color={post?.textColor as string} navigation={navigation}/>
            <Post onLiked={onLiked} post={post} />
            <CommentSection postId={post?._id} comments={post?.comments as Comment[]}  />
        </View>
    );
};

export default PostScreen;
