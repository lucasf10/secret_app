import React,{ useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { WHITE, withOpacity } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { AVAILABLE_TEXT_COLORS } from '../../../utils/constants';

type Props = {
    currentColor: string;
    onChangeColor: (color: string) => void;
    iconColor?: string;
    opacity?: string;
};

const ChangeColorButton = ({ currentColor, onChangeColor, iconColor, opacity }: Props): React.ReactElement => {

    const opaqueColor = withOpacity(iconColor || WHITE, 'CC' || opacity);

    const changeColor = useCallback(() => {
        const currentIndex = AVAILABLE_TEXT_COLORS.findIndex((color: string) => color === currentColor);
        const nextIndex = (currentIndex >= AVAILABLE_TEXT_COLORS.length - 1) ? 0 : currentIndex + 1;
        onChangeColor(AVAILABLE_TEXT_COLORS[nextIndex]);
    }, [currentColor, onChangeColor]);

    return (
        <TouchableOpacity onPress={changeColor}>
            <FontAwesomeIcon icon={faPencil} color={opaqueColor} size={18} />
        </TouchableOpacity>
    );
};

export default ChangeColorButton;
