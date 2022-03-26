import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { WHITE } from '../../../utils/colors';
import styles from './style';

type Props = {
    onClickCommentButton: () => void;
    color?: string;
    size?: number;
    viewStyle?: ViewStyle;
    textStyle?: TextStyle;
    count: number;
};

const CommentButton = ({ onClickCommentButton, color, size, textStyle, viewStyle, count }: Props): React.ReactElement => {

    return (
        <TouchableOpacity style={{...viewStyle, ...styles.view}} onPress={onClickCommentButton} >
            <FontAwesomeIcon
                icon={faComment}
                color={color || WHITE}
                size={size || 24}
            />
            { count > 0 && <Text style={{...textStyle, ...styles.text}}>{count}</Text>}
        </TouchableOpacity>
    );
};

export default CommentButton;
