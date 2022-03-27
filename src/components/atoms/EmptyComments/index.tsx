import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

const EmptyComments = (): React.ReactElement => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                No comment yet. Be the first one!
            </Text>
        </View>
    );
};

export default EmptyComments;
