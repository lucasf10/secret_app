import React from 'react';
import { View } from 'react-native';

import CameraButton from '../../atoms/CameraButton';
import ChangeColorButton from '../../atoms/ChangeColorButton';
import ShuffleButton from '../../atoms/ShuffleButton';
import CameraOptionsModal from '../CameraOptionsModal';
import styles from './style';

type Props = {
    onSwitchBGColor: (color: string) => void;
    onSwitchTextColor: (color: string) => void;
    currentBGColor: string;
    currentTextColor: string;
    onSelectCamera: () => void;
    modalVisible: boolean;
    onClickCameraButton: () => void;
    onCloseModal: () => void;
    onSelectGallery: () => void;
    onRemovePicture?: () => void;
    hideShuffleButton: boolean;
};

const CreatePostFooter = (props: Props): React.ReactElement => {
    const {
        currentBGColor,
        currentTextColor,
        onSwitchBGColor,
        onSwitchTextColor,
        onSelectCamera,
        modalVisible,
        onClickCameraButton,
        onCloseModal,
        onSelectGallery,
        onRemovePicture,
        hideShuffleButton,
    } = props;

    return (
        <View style={styles.view}>
            <CameraButton onOpenCamera={onClickCameraButton} iconColor={currentTextColor} />
            <View style={styles.rightBottom}>
                <ChangeColorButton
                    currentColor={currentTextColor}
                    onChangeColor={onSwitchTextColor}
                    iconColor={currentTextColor}
                />
                <ShuffleButton
                    onSwitchColor={onSwitchBGColor}
                    currentColor={currentBGColor}
                    visible={!hideShuffleButton}
                    iconColor={currentTextColor}
                />
            </View>
            <CameraOptionsModal
                visible={modalVisible}
                onClose={onCloseModal}
                onSelectCamera={onSelectCamera}
                onSelectGallery={onSelectGallery}
                onRemovePicture={onRemovePicture}
            />
        </View>
    );
};

export default CreatePostFooter;
