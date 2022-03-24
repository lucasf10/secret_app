import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

type Props = {
    text: string;
};

const PostContent = ({ text }: Props): React.ReactElement => {

    return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

export default PostContent;
