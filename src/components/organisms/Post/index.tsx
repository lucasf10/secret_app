import React from 'react';
import { ColorValue, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecule/PostFooter';
import PostContent from '../../atoms/PostContent';

type Props = {
    color: ColorValue,
    text: string;
    isLiked: boolean;
    onLiked: () => void;
    likeCount: number;
    commentCount: number;
};

const Post = ({ color, text, isLiked, onLiked, likeCount, commentCount }: Props): React.ReactElement => {
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
            />
        </View>
    );
};

export default Post;
