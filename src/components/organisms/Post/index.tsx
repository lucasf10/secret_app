import React from 'react';
import { ImageBackground, View } from 'react-native';

import styles from './style';
import PostFooter from '../../molecules/PostFooter';
import PostContent from '../../atoms/PostContent';
import { B64_PREFIX } from '../../../utils/constants';
import { Post as PostType } from '../../../types/post';
import { BLACK } from '../../../utils/colors';

type Props = {
    onLiked: () => void;
    onClickCommentButton?: () => void;
    post: PostType;
};

const Post = (props: Props): React.ReactElement => {
    const {
        onLiked,
        onClickCommentButton,
        post,
    } = props;

    const viewStyle = {
        ...styles.view,
        ...!(post?.backgroundImage) ? { backgroundColor: post?.colorCode || BLACK } : {},
    };

    return (
        <ImageBackground source={{ uri: `${B64_PREFIX}${post?.backgroundImage}` }} resizeMode="cover" >
            <View style={viewStyle}>
                <PostContent text={post?.text} color={post?.textColor} />
                <PostFooter
                    onLiked={onLiked}
                    like={post?.likedByUser}
                    likeCount={post?.likeAmount}
                    commentCount={post?.comments.length}
                    onClickCommentButton={onClickCommentButton}
                    color={post?.textColor}
                />
            </View>
        </ImageBackground>
    );
};

export default Post;
