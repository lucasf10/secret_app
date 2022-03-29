import React, { useCallback, useEffect, useState } from 'react';
import { ColorValue, RefreshControl, Text, View } from 'react-native';
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
import { actions as userActions } from '../../actions/user';
import { State } from '../../types/common';
import { POST_LIMIT_PER_REQUEST } from '../../utils/constants';
import Button from '../../components/atoms/Button';

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
    const posts = useSelector((state: State) => state.post.posts);
    const city = useSelector((state: State) => state.user.city);
    const isFetching = useSelector((state: State) => state.post.isFetching);
    const userIsFetching = useSelector((state: State) => state.user.isFetching);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const dispatch = useDispatch();

    const loadData = useCallback(
        (offset = 0, fromStart: boolean) => dispatch(postActions.getPosts(POST_LIMIT_PER_REQUEST, offset, fromStart)),
        [dispatch],
    );

    useEffect(() => {
        loadData(0, true);
    }, [dispatch, loadData]);

    const renderPosts = ({ item }: { item: PostType }) => {
        return (
            <Post
                text={item.text}
                color={item.colorCode!}
                isLiked={item.likedByUser}
                onLiked={() => dispatch(postActions.likePost(item._id, item.likedByUser))}
                likeCount={item.likeAmount}
                commentCount={item.comments.length}
                onClickCommentButton={() => dispatch(postActions.openPostPage(item._id, navigation))}
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
            <HeaderFeed navigation={navigation} />
            { userIsFetching ? (
                <Loader style={styles.loader} />
            ) : !city && (
                <View style={{
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text style={{
                    fontSize: 16,
                }}>You have not shared your location just yet.</Text>
                    <Button
                        title={'Click here to do so!'}
                        onClick={() => dispatch(userActions.getLocation())}
                        viewStyle={{
                            marginTop: 20,
                            width: '82%',
                        }}
                    />
                </View>
            )}
            { (!posts || posts.length === 0) && isFetching ? (
                <Loader style={styles.loader} />
            ) : city && (
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
