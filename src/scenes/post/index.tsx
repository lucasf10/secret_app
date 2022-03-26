import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import { State } from '../../types/common';

export type PostProp = NativeStackNavigationProp<LoggedStackParamList, 'Post'>;

type Props = {
    navigation: PostProp;
};

const PostScreen = ({ }: Props): React.ReactElement => {
    const post = useSelector((state: State) => state.post.currentPost);

    useEffect(() => { console.log(post); }, [post]);

    return (
        <View style={styles.view}>
            <Text>Post Screen</Text>
        </View>
    );
};

export default PostScreen;
