/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { RefreshControl, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

// import styles from './style';
import HeaderFeed from '../../components/organisms/HeaderFeed';
import Post from '../../components/organisms/Post';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/atoms/Button';
import { PRIMARY } from '../../utils/colors';

type FeedProp = NativeStackNavigationProp<LoggedStackParamList, 'Feed'>;

type Props = {
    navigation: FeedProp;
};

const FeedScreen = ({ navigation }: Props): React.ReactElement => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const posts: number[] = [1, 2, 3, 4, 5];

    const renderPosts = () => {
        return <Post />;
    };

    const wait = (timeout: number) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const onRefresh = () => {
        // Boiler plate to check functionality
        setIsRefreshing(true);
        wait(2000).then(() => setIsRefreshing(false));
    };

    return (
        <View>
            <HeaderFeed />
            {posts && posts.length > 0 ? (
                <FlatList
                    data={posts}
                    renderItem={renderPosts}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={onRefresh}
                            tintColor={PRIMARY}
                            colors={[PRIMARY]}
                        />
                    }
                    keyExtractor={item => item.toString()}
                />
            ) : (
                // EmptyFeed Component
                <View style={{
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{ fontSize: 16 }}>Nobody has shared a secret in your town yet.</Text>
                    <Button
                        title={'Click here to be the first one!'}
                        onClick={() => console.log('Pressed button')}
                        viewStyle={{ marginTop: 20, width: '82%' }}
                    />
                </View>
            )}
        </View>
    );
};

export default FeedScreen;
