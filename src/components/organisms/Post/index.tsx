import React from 'react';
import { ColorValue, ImageBackground, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecules/PostFooter';
import PostContent from '../../atoms/PostContent';
import { B64_PREFIX } from '../../../utils/constants';

type Props = {
    color: ColorValue;
    text: string;
    textColor: ColorValue;
    isLiked: boolean;
    onLiked: () => void;
    likeCount: number;
    commentCount: number;
    onClickCommentButton?: () => void;
    backgroundImage?: string;
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
        backgroundImage,
    } = props;

    const viewStyle = {
        ...styles.view,
        ...!backgroundImage ? { backgroundColor: color } : {},
    };

    return (
        <ImageBackground source={{ uri: `${B64_PREFIX}${backgroundImage}` }} resizeMode="cover" >
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
        </ImageBackground>
    );
};

export default Post;
