import React from 'react';
import { View } from 'react-native';

import CameraButton from '../../atoms/CameraButton';
import ShuffleButton from '../../atoms/ShuffleButton';
import CameraOptionsModal from '../CameraOptionsModal';
import styles from './style';

type Props = {
    onSwitchColor: (color: string) => void;
    currentColor: string;
    onSelectCamera: () => void;
    modalVisible: boolean;
    onClickCameraButton: () => void;
    onCloseModal: () => void;
    onSelectGallery: () => void;
    hideShuffleButton: boolean;
};

const CreatePostFooter = (props: Props): React.ReactElement => {
    const {
        currentColor,
        onSwitchColor,
        onSelectCamera,
        modalVisible,
        onClickCameraButton,
        onCloseModal,
        onSelectGallery,
        hideShuffleButton,
    } = props;

    return (
        <View style={styles.view}>
            <CameraButton
                onOpenCamera={onClickCameraButton}
                currentColor={currentColor}
            />
            <ShuffleButton
                onSwitchColor={onSwitchColor}
                currentColor={currentColor}
                visible={!hideShuffleButton}
            />
            <CameraOptionsModal
                visible={modalVisible}
                onClose={onCloseModal}
                onSelectCamera={onSelectCamera}
                onSelectGallery={onSelectGallery}
            />
        </View>
    );
};

export default CreatePostFooter;
