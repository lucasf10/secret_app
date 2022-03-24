import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faEmptyHeart } from '@fortawesome/free-regular-svg-icons';

import { WHITE } from '../../../utils/colors';

type Props = {
    onLiked: () => void;
    liked: boolean;
    size?: number;
    color?: string;
    style?: ViewStyle;
};

const LikeButton = ({ onLiked, liked, size, color, style }: Props): React.ReactElement => {

    return (
        <TouchableOpacity style={style} onPress={onLiked}>
            <FontAwesomeIcon
                icon={liked ? faHeart : faEmptyHeart }
                color={color || WHITE}
                size={size || 24}
            />
        </TouchableOpacity>
    );
};

export default LikeButton;
