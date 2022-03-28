import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Comment as CommentType } from '../../../types/comment';
import { PRIMARY } from '../../../utils/colors';
import { actions as postActions } from '../../../actions/post';

import { useDispatch } from 'react-redux';
import EmptyComments from '../../atoms/EmptyComments';
import Comment from '../Comment';

type Props = {
    comments: CommentType[];
    postId: string;
};

type renderItemProps = {
    item: CommentType;
    index: number;
}

const CommentList = ({ comments, postId }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setIsRefreshing(true);
        dispatch(postActions.getPost(postId));
        setIsRefreshing(false);
    }, [postId, dispatch]);

    const refreshControl: React.ReactElement = (
        <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={PRIMARY}
            colors={[PRIMARY]}
        />
    );

    const renderComment = ({ item, index }: renderItemProps) =>
        <Comment comment={item} postId={postId} isFirst={index === 0} />;

    return (
        <FlatList
            data={comments}
            keyExtractor={(item: CommentType) => item._id}
            renderItem={renderComment}
            refreshControl={refreshControl}
            ListEmptyComponent={EmptyComments}
        />
    );
};

export default CommentList;
