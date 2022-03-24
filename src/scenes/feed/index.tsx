import React, { useState } from 'react';
import { ColorValue, RefreshControl, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import HeaderFeed from '../../components/organisms/HeaderFeed';
import Post from '../../components/organisms/Post';
import { FlatList } from 'react-native-gesture-handler';
import { PRIMARY, BLACK } from '../../utils/colors';
import EmptyFeed from '../../components/molecule/EmptyFeed';
import Loader from '../../components/atoms/Loader';

type FeedProp = NativeStackNavigationProp<LoggedStackParamList, 'Feed'>;

type Props = {
    navigation: FeedProp;
};

interface Post {
    id: string,
    text: string;
    color: ColorValue;
    liked: boolean;
}

const FeedScreen = ({ }: Props): React.ReactElement => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const initalPosts: Post[] = [
        {
            id: '1',
            text: 'Peter Parker é o Homem-Aranha. \'0\'',
            color: BLACK,
            liked: true,
        },
        {
            id: '2',
            text: 'Is this for real?',
            color: 'green',
            liked: false,
        },
        {
            id: '3',
            text: 'Wow, such a cool app!',
            color: 'purple',
            liked: false,
        },
    ];
    const [posts, setPosts] = useState<Post[]>(initalPosts);

    const renderPosts = ({ item }: { item: Post }) => {
        return (
            <Post
                text={item.text}
                color={item.color}
                isLiked={item.liked}
            />
        );
    };

    const loadMore = async () => {
        // Boiler plate to check functionality
        setIsLoadingMore(true);
        const newPosts: Post[] = [{
            id: (posts.length + 1).toString(),
            text: 'A new post',
            color: 'violet',
            liked: false,
        },
        {
            id: (posts.length + 2).toString(),
            text: 'A new post',
            color: 'blue',
            liked: true,
        }];

        if (posts.length < 10 ) {
            await wait(2000).then(() => {
                setPosts([
                    ...posts,
                    ...newPosts,
                ]);
            });
        }
        setIsLoadingMore(false);
    };

    const wait = (timeout: number) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = () => {
        // Boiler plate to check functionality
        const newPost: Post = {
            id: '4',
            text: 'An updated post',
            color: 'red',
            liked: false,
        };

        setIsRefreshing(true);
        wait(2000).then(() => {
            setPosts([
                newPost,
                ...posts,
            ]);
            setIsRefreshing(false);
        });
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
            {posts && posts.length > 0 ? (
                <FlatList
                    data={posts}
                    renderItem={renderPosts}
                    refreshControl={refreshControl}
                    keyExtractor={(item: Post) => item.id}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={renderFooterLoader}
                />
            ) : ( <EmptyFeed /> )}
        </View>
    );
};

export default FeedScreen;
