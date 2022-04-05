import React from 'react';
import { ColorValue, View } from 'react-native';
import { WHITE } from '../../../utils/colors';

import Text from '../DefaultFontText';
import styles from './style';

type Props = {
    text: string;
    color: ColorValue;
};

const PostContent = ({ text, color }: Props): React.ReactElement => {

    return (
        <View style={styles.view}>
            <Text fontWeight="Medium" style={{...styles.text, color: color || WHITE }}>{text}</Text>
        </View>
    );
};

export default PostContent;
