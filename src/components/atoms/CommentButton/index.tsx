import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { WHITE } from '../../../utils/colors';

type Props = {
    onClickCommentButton: () => void;
    color?: string;
    size?: number;
    style?: ViewStyle;
};

const CommentButton = ({ onClickCommentButton, color, size, style }: Props): React.ReactElement => {

    return (
        <TouchableOpacity style={style} onPress={onClickCommentButton} >
            <FontAwesomeIcon
                icon={faComment}
                color={color || WHITE}
                size={size || 24}
            />
        </TouchableOpacity>
    );
};

export default CommentButton;
