import React from 'react';
import { View } from 'react-native';

import CameraButton from '../../atoms/CameraButton';
import ChangeColorButton from '../../atoms/ChangeColorButton';
import RemoveImageButton from '../../atoms/RemoveImageButton';
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
    onRemovePicture: () => void;
    hideShuffleButton: boolean;
    isImageSelected: boolean;
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
        isImageSelected,
    } = props;

    return (
        <View style={styles.view}>
            {!isImageSelected
                ? <CameraButton onOpenCamera={onClickCameraButton} iconColor={currentTextColor} />
                : <RemoveImageButton onRemoveImage={onRemovePicture} />
            }
            <View style={styles.rightBottom}>
                <ChangeColorButton
                    currentColor={currentTextColor}
                    onChangeColor={onSwitchTextColor}
                    iconColor={currentTextColor}
                />
                {!hideShuffleButton && (
                    <ShuffleButton
                        onSwitchColor={onSwitchBGColor}
                        currentColor={currentBGColor}
                        iconColor={currentTextColor}
                        style={styles.shuffleButton}
                    />
                )}
            </View>
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
