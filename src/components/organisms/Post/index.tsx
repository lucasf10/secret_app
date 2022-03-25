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
};

const Post = ({ color, text, isLiked, onLiked }: Props): React.ReactElement => {
    const viewStyle = {
        ...styles.view,
        backgroundColor: color,
    };

    return (
        <View style={viewStyle}>
            <PostContent text={text} />
            <PostFooter onLiked={onLiked} like={isLiked} />
        </View>
    );
};

export default Post;
