import React, { useState } from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { Asset, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import CloseButton from '../../components/atoms/CloseButton';
import { WHITE } from '../../utils/colors';
import CreatePostButton from '../../components/atoms/CreatePostButton';
import CreatePostFooter from '../../components/molecules/CreatePostFooter';
import CreatePostInput from '../../components/molecules/CreatePostInput';
import { actions as toastActions } from '../../actions/toast';
import { CAMERA_OPTIONS, IMAGE_PICKER_OPTIONS } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { requestCameraPermission } from '../../utils/functions';

export type CreatePostProp = NativeStackNavigationProp<LoggedStackParamList, 'CreatePost'>;

type Props = {
    navigation: CreatePostProp;
};

const CreatePostScreen = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const [currentBGColor, setCurrentBGColor] = useState<string>('black');
    const [currentTextColor, setCurrentTextColor] = useState<string>(WHITE);
    const [modal, setModal] = useState<boolean>(false);
    const [image, setImage] = useState<Asset|null>(null);

    const closeModal = () => {
        setModal(false);
    };

    const openModal = () => {
        setModal(true);
    };

    const selectImageCallback = (response: ImagePickerResponse) => {
        closeModal();
        const source = response.assets && response.assets[0];
        if (source && source.uri) setImage(source);
    };

    const onSelectCamera = async () => {
        const permission = Platform.OS === 'ios' || (await requestCameraPermission());
        if (permission)
            launchCamera(CAMERA_OPTIONS, selectImageCallback);
        else
            dispatch(toastActions.setToast('Camera was denied'));
    };

    const onSelectGallery = () => {
        launchImageLibrary(IMAGE_PICKER_OPTIONS, selectImageCallback);
    };

    const onRemovePicture = () => {
        setImage(null);
    }

    return (
        <ImageBackground
            resizeMode="cover"
            source= {{
                uri:`data:image/png;base64,${image?.base64}`,
            }}
        >
            <View style={{
                ...styles.view,
                ...!(image?.base64) ? { backgroundColor: currentBGColor } : {},
            }}>
                <CloseButton color={currentTextColor} navigation={navigation} />

                <CreatePostButton
                    navigation={navigation}
                    text={text}
                    postColor={currentBGColor}
                    color={currentTextColor}
                    textColor={currentTextColor}
                />

                <CreatePostInput
                    text={text}
                    onChange={setText}
                    color={currentTextColor}
                />

                <CreatePostFooter
                    hideShuffleButton={!!image}
                    onSwitchBGColor={setCurrentBGColor}
                    currentBGColor={currentBGColor}
                    currentTextColor={currentTextColor}
                    onSwitchTextColor={setCurrentTextColor}
                    onSelectCamera={onSelectCamera}
                    onClickCameraButton={openModal}
                    modalVisible={modal}
                    onCloseModal={closeModal}
                    onSelectGallery={onSelectGallery}
                    onRemovePicture={image ? onRemovePicture : undefined}
                />
            </View>
        </ImageBackground>
    );
};

export default CreatePostScreen;
