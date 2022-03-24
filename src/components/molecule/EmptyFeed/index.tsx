import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
import Button from '../../atoms/Button';

const EmptyFeed = (): React.ReactElement => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Nobody has shared a secret in your town yet.</Text>
            <Button
                title={'Click here to be the first one!'}
                onClick={() => console.log('Pressed button')}
                viewStyle={styles.button}
            />
        </View>
    )
};

export default EmptyFeed;
