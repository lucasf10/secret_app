import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { WHITE, withOpacity } from '../../../utils/colors';
import styles from './style';
import { PostProp } from '../../../scenes/post';
import { CreatePostProp } from '../../../scenes/createPost';

type Props = {
    navigation: PostProp|CreatePostProp;
    color?: string;
    size?: number;
    opacity?: string;
    style?: ViewStyle;
};

const CloseButton = ({ navigation, color, size, opacity, style }: Props): React.ReactElement => {

    const onClick = () => {
        navigation.pop();
    };

    const opaqueColor = withOpacity(color || WHITE, 'CC' || opacity);

    return (
        <TouchableOpacity style={{...style, ...styles.view}} onPress={onClick} >
            <FontAwesomeIcon
                icon={faClose}
                color={opaqueColor}
                size={size || 26}
            />
        </TouchableOpacity>
    );
};

export default CloseButton;
