import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';

import styles from './style';
import Button from '../../atoms/Button';
import { actions as userActions } from '../../../actions/user';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { PRIMARY } from '../../../utils/colors';
import { faWarning } from '@fortawesome/free-solid-svg-icons';


const LocationNotShared = (): React.ReactElement => {
    const dispatch = useDispatch();

    return (
        <View style={styles.view}>
            <FontAwesomeIcon
                icon={faWarning}
                color={PRIMARY}
                size={50}
                style={styles.icon}
            />
            <Text style={styles.text}>
                You have not shared your location just yet.
            </Text>
            <Button
                title={'Click here to do so!'}
                onClick={() => dispatch(userActions.getLocation())}
                viewStyle={styles.buttonView}
            />
        </View>
    );
};

export default LocationNotShared;
