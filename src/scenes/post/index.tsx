import React from 'react';
import { Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';

export type PostProp = NativeStackNavigationProp<LoggedStackParamList, 'Post'>;

type Props = {
    navigation: PostProp;
};

const PostScreen = ({ navigation }: Props): React.ReactElement => {

    return (
        <View style={styles.view}>
            <Text>Post Screen</Text>
        </View>
    );
};

export default PostScreen;
