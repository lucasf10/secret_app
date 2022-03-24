import React, { useState } from 'react';
import { ColorValue, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecule/PostFooter';
import PostContent from '../../atoms/PostContent';

type Props = {
    color: ColorValue,
    text: string;
    isLiked: boolean;
};

const Post = ({ color, text, isLiked }: Props): React.ReactElement => {
    const [liked, setLiked] = useState<boolean>(isLiked);

    const viewStyle = {
        ...styles.view,
        backgroundColor: color,
    }

    return (
        <View style={viewStyle}>
            <PostContent text={text} />
            <PostFooter onLiked={() => setLiked(!liked)} like={liked} />
        </View>
    );
};

export default Post;
