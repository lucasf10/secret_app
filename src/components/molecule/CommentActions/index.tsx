import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { PRIMARY } from '../../../utils/colors';
import LikeButton from '../../atoms/LikeButton';
import { actions as commentActions } from '../../../actions/comment';

import styles from './style';
import { useDispatch } from 'react-redux';

type Props = {
    commentId: string;
    postId: string;
    createdByUser: boolean;
    likedByUser: boolean;
};

const CommentActions = ({ commentId, postId, createdByUser, likedByUser }: Props): React.ReactElement => {
    const dispatch = useDispatch();

    const onDeleteComment = useCallback((id: string) => {
        dispatch(commentActions.deleteComment(id, postId));
    }, [postId, dispatch]);

    const onLikeComment = useCallback((id: string, isDislike: boolean) => {
        dispatch(commentActions.likeComment(postId, id, isDislike));
    }, [postId, dispatch]);

    return (
        <View style={styles.view}>
            {createdByUser && (
                <TouchableOpacity onPress={() => onDeleteComment(commentId)}>
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        color={PRIMARY}
                        size={20}
                    />
                </TouchableOpacity>
            )}
            <LikeButton
                onLiked={() => onLikeComment(commentId, likedByUser)}
                liked={likedByUser}
                count={0}
                size={22}
                color={PRIMARY}
                viewStyle={styles.like}
            />
            </View>
    );
};

export default CommentActions;
