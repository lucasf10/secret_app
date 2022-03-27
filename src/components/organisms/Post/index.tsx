import React from 'react';
import { ColorValue, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecule/PostFooter';
import PostContent from '../../atoms/PostContent';

type Props = {
    color: ColorValue;
    text: string;
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
            <PostContent text={text}/>
            <PostFooter
                onLiked={onLiked}
                like={isLiked}
                likeCount={likeCount}
                commentCount={commentCount}
                onClickCommentButton={onClickCommentButton}
            />
        </View>
    );
};

export default Post;
