import { ColorValue } from 'react-native';

export interface PostState {
    isFetching: boolean;
    posts: Post[]
}

export interface Post {
    _id: string,
    text: string,
    city?: string,
    colorCode?: ColorValue,
    createdAt?: Date,
    likeAmount: number,
    comments: string[],
}