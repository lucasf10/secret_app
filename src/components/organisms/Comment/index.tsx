import React from 'react';
import { Text, View } from 'react-native';
import { Comment as CommentType } from '../../../types/comment';
import { GREY, withOpacity } from '../../../utils/colors';

import styles from './style';
import { getRelativeTime } from '../../../utils/functions';
import CommentActions from '../../molecule/CommentActions';

type Props = {
    comment: CommentType;
    postId: string;
    isFirst: boolean;
};

const Comment = ({ comment, postId, isFirst }: Props): React.ReactElement => {
    return (
        <View style={{
            ...styles.view,
            ...!isFirst ? { borderTopWidth: 1, borderTopColor: withOpacity(GREY, '99') } : {},
        }}>
            <View>
                <Text style={styles.text}>
                    {comment.text}
                </Text>
                <Text style={styles.meta}>
                    {getRelativeTime(new Date(comment.createdAt))} · {comment.likeAmount} likes
                </Text>
            </View>

            <CommentActions
                commentId={comment._id}
                postId={postId}
                createdByUser={comment.createdByUser}
                likedByUser={comment.likedByUser}
            />
        </View>
    );
};

export default Comment;
