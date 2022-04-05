import React from 'react';
import { ColorValue, View, ViewStyle } from 'react-native';

import style from './style';
import LikeButton from '../../atoms/LikeButton';
import CommentButton from '../../atoms/CommentButton';

type Props = {
    onClickCommentButton?: () => void;
    onLiked: () => void;
    like: boolean;
    likeCount: number;
    commentCount: number;
    likeStyle?: ViewStyle;
    color: ColorValue;
};

const PostFooter = (props: Props): React.ReactElement => {
    const {
        onClickCommentButton,
        onLiked,
        like,
        likeCount,
        commentCount,
        likeStyle,
        color,
    } = props;

    return (
        <View style={style.view}>
            <CommentButton
                count={commentCount}
                onClickCommentButton={onClickCommentButton}
                color={color}
                textStyle={{ color }}
            />

            <LikeButton
                onLiked={onLiked}
                liked={like}
                viewStyle={{...style.like, ...likeStyle}}
                count={likeCount}
                color={color}
                textStyle={{ color }}
            />
        </View>
    );
};

export default PostFooter;
