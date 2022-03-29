import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Text from '../DefaultFontText';
import { WHITE } from '../../../utils/colors';
import styles from './style';

type Props = {
    onClickCommentButton?: () => void;
    color?: string;
    size?: number;
    viewStyle?: ViewStyle;
    textStyle?: TextStyle;
    count: number;
};

const CommentButton = ({ onClickCommentButton, color, size, textStyle, viewStyle, count }: Props): React.ReactElement => {

    return (
        <TouchableOpacity
            style={{...viewStyle, ...styles.view}}
            onPress={onClickCommentButton}
            disabled={!onClickCommentButton}
        >
            <FontAwesomeIcon
                icon={faComment}
                color={color || WHITE}
                size={size || 22}
            />
            { count > 0 && <Text fontWeight="Book" style={{...textStyle, ...styles.text}}>{count}</Text>}
        </TouchableOpacity>
    );
};

export default CommentButton;
