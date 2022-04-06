import React from 'react';
import { TouchableOpacity } from 'react-native';

import { WHITE, withOpacity } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
    onRemoveImage: () => void;
    iconColor?: string;
    opacity?: string;
};

const RemoveImageButton = ({ onRemoveImage, iconColor, opacity }: Props): React.ReactElement => {
    const opaqueColor = withOpacity(iconColor || WHITE, 'CC' || opacity);

    return (
        <TouchableOpacity onPress={onRemoveImage}>
            <FontAwesomeIcon icon={faTrash} color={opaqueColor} size={18} />
        </TouchableOpacity>
    );
};

export default RemoveImageButton;
