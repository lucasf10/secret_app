import { ColorValue } from 'react-native';

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
    likeAmount: number,
    comments: string[],
}
