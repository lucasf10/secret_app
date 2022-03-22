import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import Button from '../../components/atoms/Button';
import { actions as userActions} from '../../actions/user'

type FeedProp = NativeStackNavigationProp<LoggedStackParamList, 'Feed'>;

type Props = {
    navigation: FeedProp;
};

const FeedScreen = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Feed</Text>
            <Button
                title="Log Out"
                onClick={() => dispatch(userActions.signOut())}
            />
        </View>
    );
};

export default FeedScreen;
