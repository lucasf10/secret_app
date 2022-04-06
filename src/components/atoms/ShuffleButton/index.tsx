import React,{ useCallback } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { WHITE, withOpacity } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { AVAILABLE_BG_COLORS } from '../../../utils/constants';
type Props = {
    onSwitchColor: (color: string) => void;
    currentColor: string;
    iconColor?: string;
    opacity?: string;
    style?: ViewStyle;
};

const ShuffleButton = ({ currentColor, onSwitchColor, iconColor, opacity, style }: Props): React.ReactElement => {

    const opaqueColor = withOpacity(iconColor || WHITE, 'CC' || opacity);

    const switchColor = useCallback(() => {
        const currentIndex = AVAILABLE_BG_COLORS.findIndex(color => color === currentColor);
        const nextIndex = (currentIndex >= AVAILABLE_BG_COLORS.length - 1) ? 0 : currentIndex + 1;
        onSwitchColor(AVAILABLE_BG_COLORS[nextIndex]);
    }, [currentColor, onSwitchColor]);

    return (
        <TouchableOpacity onPress={switchColor} style={style}>
            <FontAwesomeIcon icon={faShuffle} color={opaqueColor} size={22} />
        </TouchableOpacity>
    );
};

export default ShuffleButton;
