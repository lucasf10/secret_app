import React,{ useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { WHITE, withOpacity } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { AVAILABLE_COLORS } from '../../../utils/constants';
type Props = {
    onSwitchColor: (color: string) => void;
    currentColor: string;
    iconColor?: string;
    opacity?: string;
    visible?: boolean;
};

const ShuffleButton = ({ currentColor, onSwitchColor, iconColor, opacity, visible }: Props): React.ReactElement => {

    const opaqueColor = withOpacity(iconColor || WHITE, 'CC' || opacity);

    const switchColor = useCallback(() => {
        const currentIndex = AVAILABLE_COLORS.findIndex(color => color === currentColor);
        const nextIndex = (currentIndex >= AVAILABLE_COLORS.length - 1) ? 0 : currentIndex + 1;
        onSwitchColor(AVAILABLE_COLORS[nextIndex]);
    }, [currentColor, onSwitchColor]);

    return (
        <TouchableOpacity onPress={switchColor} style={{ ...!visible ? { display: 'none' } : {} }}>
            <FontAwesomeIcon icon={faShuffle} color={opaqueColor} size={22} />
        </TouchableOpacity>
    );
};

export default ShuffleButton;
