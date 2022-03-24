import React, { useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

// import styles from './style';
import HeaderFeed from '../../components/organisms/HeaderFeed';
import Post from '../../components/organisms/Post';
import { FlatList } from 'react-native-gesture-handler';
import { PRIMARY, BLACK } from '../../utils/colors';
import EmptyFeed from '../../components/molecule/EmptyFeed';

type FeedProp = NativeStackNavigationProp<LoggedStackParamList, 'Feed'>;

type Props = {
    navigation: FeedProp;
};

const FeedScreen = ({ }: Props): React.ReactElement => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const posts: number[] = [1, 2, 3, 4, 5];

    const renderPosts = () => {
        return (
            <Post
                text="Peter Parker é o Homem-Aranha. &apos;0&apos;"
                color={BLACK}
                isLiked={true}
            />
        );
    };

    const wait = (timeout: number) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = () => {
        // Boiler plate to check functionality
        setIsRefreshing(true);
        wait(2000).then(() => setIsRefreshing(false));
    };

    const refreshControl: React.ReactElement = (
        <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={PRIMARY}
            colors={[PRIMARY]}
        />
    );

    return (
        <View>
            <HeaderFeed />
            {posts && posts.length > 0 ? (
                <FlatList
                    data={posts}
                    renderItem={renderPosts}
                    refreshControl={refreshControl}
                    keyExtractor={item => item.toString()}
                />
            ) : ( <EmptyFeed /> )}
        </View>
    );
};

export default FeedScreen;
