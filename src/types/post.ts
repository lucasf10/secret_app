import { ColorValue } from 'react-native';
import { Comment } from './comment';

export interface PostState {
    isFetching: boolean;
    posts: Post[]
    currentPost?: Post;
}

export interface Post {
    _id: string,
    text: string,
    city?: string,
    colorCode?: ColorValue,
    textColor: ColorValue,
    likeAmount: number,
    comments: Comment[] | string[],
    likedByUser: boolean,
}
