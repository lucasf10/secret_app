import React from 'react';
import { TouchableOpacity } from 'react-native';

import { WHITE, withOpacity } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

type Props = {
    onOpenCamera: () => void;
    currentColor: string;
    iconColor?: string;
    opacity?: string;
};

const CameraButton = ({ onOpenCamera, iconColor, opacity }: Props): React.ReactElement => {

    const opaqueColor = withOpacity(iconColor || WHITE, 'CC' || opacity);

    return (
        <TouchableOpacity onPress={onOpenCamera}>
            <FontAwesomeIcon icon={faCamera} color={opaqueColor} size={22} />
        </TouchableOpacity>
    );
};

export default CameraButton;
