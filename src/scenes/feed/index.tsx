import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import styles from './style';
import { Logo } from '../../assets/images';
import Button from '../../components/atoms/Button';
import { actions as userActions} from '../../actions/user';
import { PRIMARY } from '../../utils/colors';

type FeedProp = NativeStackNavigationProp<LoggedStackParamList, 'Feed'>;

type Props = {
    navigation: FeedProp;
};

const renderHeader = (LogOut: () => void): React.ReactElement => {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity onPress={LogOut}>
                <FontAwesomeIcon icon={faRightFromBracket} color={PRIMARY} size={22} />
            </TouchableOpacity>

            <Image resizeMode="contain" source={Logo} style={styles.logo} />

            <TouchableOpacity onPress={() => console.log('Pressed')}>
                <FontAwesomeIcon icon={faPenToSquare} color={PRIMARY} size={22} />
            </TouchableOpacity>
        </View>
    );
};

const FeedScreen = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();

    const LogOut = () => dispatch(userActions.signOut());

    return (
        <View>
            {renderHeader(LogOut)}
            <Text style={{textAlign: 'center'}}>Feed</Text>
        </View>
    );
};

export default FeedScreen;
