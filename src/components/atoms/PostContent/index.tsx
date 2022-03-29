import React from 'react';
import { View } from 'react-native';

import Text from '../DefaultFontText';
import styles from './style';

type Props = {
    text: string;
};

const PostContent = ({ text }: Props): React.ReactElement => {

    return (
        <View style={styles.view}>
            <Text fontWeight="Medium" style={styles.text}>{text}</Text>
        </View>
    );
};

export default PostContent;
