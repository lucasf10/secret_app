import React, { useCallback, useEffect, useState } from 'react';
import { ColorValue, RefreshControl, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import HeaderFeed from '../../components/organisms/HeaderFeed';
import Post from '../../components/organisms/Post';
import { Post as PostType } from '../../types/post'
import { FlatList } from 'react-native-gesture-handler';
import { PRIMARY } from '../../utils/colors';
import EmptyFeed from '../../components/molecule/EmptyFeed';
import Loader from '../../components/atoms/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { actions as postActions } from '../../actions/post';
import { State } from '../../types/common';
import { POST_LIMIT_PER_REQUEST } from '../../utils/constants';

export type FeedProp = NativeStackNavigationProp<LoggedStackParamList, 'Feed'>;

type Props = {
    navigation: FeedProp;
};

interface Post {
    id: string,
    text: string;
    color: ColorValue;
    liked: boolean;
}

const FeedScreen = ({ navigation }: Props): React.ReactElement => {
    const user = useSelector((state: State) => state.user.user);
    const posts = useSelector((state: State) => state.post.posts);
    const isFetching = useSelector((state: State) => state.post.isFetching);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const dispatch = useDispatch();

    const loadData = useCallback(
        (offset = 0, fromStart: boolean) => dispatch(postActions.getPosts('', POST_LIMIT_PER_REQUEST, offset, fromStart)),
        [dispatch],
    );

    useEffect(() => {
        loadData(0, true);
    }, [loadData]);

    const renderPosts = ({ item }: { item: PostType }) => {
        const isPostLiked = (user?.likedPosts && user?.likedPosts.indexOf(item._id) > -1) || false;
        return (
            <Post
                navigation={navigation}
                text={item.text}
                color={item.colorCode!}
                isLiked={isPostLiked}
                onLiked={() => dispatch(postActions.likePost(item._id, isPostLiked))}
                likeCount={item.likeAmount}
                commentCount={item.comments.length}
            />
        );
    };

    const loadMore = () => {
        if (!isLoadingMore) {
            setIsLoadingMore(true);
            loadData(posts.length, false);
            setIsLoadingMore(false);
        }
    };

    const onRefresh = () => {
        setIsRefreshing(true);
        loadData(0, true);
        setIsRefreshing(false);
    };

    const refreshControl: React.ReactElement = (
        <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={PRIMARY}
            colors={[PRIMARY]}
        />
    );

    const renderFooterLoader = () => {
        if (!isLoadingMore) return null;
        return <Loader style={styles.loader} size={30} />;
    };

    return (
        <View style={styles.view}>
            <HeaderFeed />
            { (!posts || posts.length === 0) && isFetching ? (
                <Loader style={styles.loader} />
            ) : (
                <FlatList
                    data={posts}
                    renderItem={renderPosts}
                    refreshControl={refreshControl}
                    keyExtractor={(item: PostType) => item._id}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooterLoader}
                    ListEmptyComponent={EmptyFeed}
                />
            )}
        </View>
    );
};

export default FeedScreen;
