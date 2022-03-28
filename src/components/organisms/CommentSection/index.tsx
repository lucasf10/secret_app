import React from 'react';
import { View } from 'react-native';

import styles from './style';
import { Comment } from '../../../types/comment';
import CommentList from '../CommentList';
import AddComment from '../../molecule/AddComment';


type Props = {
    comments: Comment[];
    postId: string;
};

const CommentSection = ({ comments, postId }: Props): React.ReactElement => {

    return (
        <View style={styles.view}>
            <CommentList comments={comments} postId={postId} />
            <AddComment postId={postId} />
        </View>
    );
};

export default CommentSection;
