export interface CommentState {
    isFetching: boolean;
}
export interface Comment {
    _id: string,
    text: string,
    createdByUser?: boolean;
}
