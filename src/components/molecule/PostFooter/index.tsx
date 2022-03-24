import React from 'react';
import { View } from 'react-native';

import style from './style';
import LikeButton from '../../atoms/LikeButton';
import CommentButton from '../../atoms/CommentButton';

type Props = {
    onLiked: () => void;
    like: boolean;
};

const PostFooter = ({ onLiked, like }: Props): React.ReactElement => {

    return (
        <View style={style.view}>
            <CommentButton onClickCommentButton={() => console.log('Comment button pressed.')}/>

            <LikeButton onLiked={onLiked} liked={like} style={style.like} />
        </View>
    );
};

export default PostFooter;
