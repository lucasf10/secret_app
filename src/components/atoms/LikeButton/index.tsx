import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';

import Text from '../DefaultFontText';
import { WHITE } from '../../../utils/colors';
import styles from './style';

type Props = {
    onLiked: () => void;
    liked: boolean;
    size?: number;
    color?: string;
    viewStyle?: ViewStyle;
    textStyle?: TextStyle;
    count: number;
};

const LikeButton = ({ onLiked, liked, size, color, viewStyle, textStyle, count }: Props): React.ReactElement => {
    return (
        <TouchableOpacity style={{...viewStyle, ...styles.view}} onPress={onLiked}>
            <FontAwesomeIcon
                icon={liked ? faHeart : faEmptyHeart }
                color={color || WHITE}
                size={size || 22}
            />
            { count > 0 && <Text fontWeight="Book" style={{...textStyle, ...styles.text}}>{count}</Text>}
        </TouchableOpacity>
    );
};

export default LikeButton;
