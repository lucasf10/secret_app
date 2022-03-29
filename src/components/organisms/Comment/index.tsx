import React from 'react';
import { View } from 'react-native';
import { Comment as CommentType } from '../../../types/comment';
import { GREY, withOpacity } from '../../../utils/colors';

import styles from './style';
import Text from '../../atoms/DefaultFontText';
import { getRelativeTime } from '../../../utils/functions';
import CommentActions from '../../molecules/CommentActions';

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
                <Text fontWeight="Book" style={styles.text}>
                    {comment.text}
                </Text>
                <Text fontWeight="Book" style={styles.meta}>
                    {getRelativeTime(new Date(comment.createdAt))} · {`${comment.likeAmount} like${comment.likeAmount > 1 ? 's' : ''}`}
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
