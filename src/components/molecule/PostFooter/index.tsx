import React from 'react';
import { View } from 'react-native';

import style from './style';
import LikeButton from '../../atoms/LikeButton';
import CommentButton from '../../atoms/CommentButton';

type Props = {
    onLiked: () => void;
    like: boolean;
    likeCount: number;
    commentCount: number;
};

const PostFooter = ({ onLiked, like, likeCount,commentCount }: Props): React.ReactElement => {

    return (
        <View style={style.view}>
            <CommentButton count={commentCount} onClickCommentButton={() => console.log('Comment button pressed.')} />

            <LikeButton onLiked={onLiked} liked={like} viewStyle={style.like} count={likeCount} />
        </View>
    );
};

export default PostFooter;
