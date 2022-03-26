import React from 'react';
import { ColorValue, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecule/PostFooter';
import PostContent from '../../atoms/PostContent';
import { FeedProp } from '../../../scenes/feed';

type Props = {
    navigation: FeedProp;
    color: ColorValue;
    text: string;
    isLiked: boolean;
    onLiked: () => void;
    likeCount: number;
    commentCount: number;
};

const Post = (props: Props): React.ReactElement => {
    const {
        navigation,
        color,
        text,
        isLiked,
        onLiked,
        likeCount,
        commentCount,
    } = props;

    const viewStyle = {
        ...styles.view,
        backgroundColor: color,
    };

    const goToPostScreen = () => navigation.navigate('Post');

    return (
        <View style={viewStyle}>
            <PostContent text={text}/>
            <PostFooter
                onLiked={onLiked}
                like={isLiked}
                likeCount={likeCount}
                commentCount={commentCount}
                onClickCommentButton={goToPostScreen}
            />
        </View>
    );
};

export default Post;
