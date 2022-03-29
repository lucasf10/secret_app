import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { actions as commentActions } from '../../../actions/comment';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './style';

type Props = {
    postId: string;
};

const AddComment = ({ postId }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState<string|undefined>(undefined);

    const onSendComment = useCallback(() => {
        if (newComment && newComment !== '')
            dispatch(commentActions.createComment(postId, newComment));
        setNewComment(undefined);
    }, [postId, dispatch, newComment]);

    return (
        <View style={styles.view}>
            <Input
                placeholder="Say something nice..."
                multiline
                style={styles.input}
                value={newComment}
                onChange={(value: string) => { setNewComment(value); }}
            />
            <Button
                viewStyle={styles.viewButton}
                textStyle={styles.textButton}
                disabled={(!newComment || newComment === '') || false}
                title="Send"
                onClick={onSendComment}
            />
        </View>
    );
};

export default AddComment;
