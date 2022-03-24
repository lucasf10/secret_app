import { ColorValue } from 'react-native';

export interface PostState {
    isFetching: boolean;
    posts: Post[]
}

export interface Post {
    id: string,
    text: string,
    city?: string,
    colorCode?: ColorValue,
    createdAt?: Date,
    liked?: boolean,
}
