import React from 'react';
import { ColorValue, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecules/PostFooter';
import PostContent from '../../atoms/PostContent';

type Props = {
    color: ColorValue;
    text: string;
    textColor: ColorValue;
    isLiked: boolean;
    onLiked: () => void;
    likeCount: number;
    commentCount: number;
    onClickCommentButton?: () => void;
};

const Post = (props: Props): React.ReactElement => {
    const {
        color,
        text,
        textColor,
        isLiked,
        onLiked,
        likeCount,
        commentCount,
        onClickCommentButton,
    } = props;

    const viewStyle = {
        ...styles.view,
        backgroundColor: color,
    };

    return (
        <View style={viewStyle}>
            <PostContent text={text} color={textColor} />
            <PostFooter
                onLiked={onLiked}
                like={isLiked}
                likeCount={likeCount}
                commentCount={commentCount}
                onClickCommentButton={onClickCommentButton}
                color={textColor}
            />
        </View>
    );
};

export default Post;
