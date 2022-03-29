import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import CloseButton from '../../components/atoms/CloseButton';
import { WHITE } from '../../utils/colors';
import CreatePostButton from '../../components/atoms/CreatePostButton';
import CreatePostFooter from '../../components/molecules/CreatePostFooter';
import CreatePostInput from '../../components/molecules/CreatePostInput';

export type CreatePostProp = NativeStackNavigationProp<LoggedStackParamList, 'CreatePost'>;

type Props = {
    navigation: CreatePostProp;
};

const CreatePostScreen = ({ navigation }: Props): React.ReactElement => {
    const [text, setText] = useState<string>('');
    const [currentColor, setCurrentColor] = useState<string>('black');

    return (
        <View style={{...styles.view, ...{ backgroundColor: currentColor }}}>
            <CloseButton color={WHITE} navigation={navigation}/>

            <CreatePostButton
                navigation={navigation}
                text={text}
                postColor={currentColor}
            />

            <CreatePostInput
                text={text}
                onChange={setText}
            />

            <CreatePostFooter
                onSwitchColor={setCurrentColor}
                currentColor={currentColor}
            />
        </View>
    );
};

export default CreatePostScreen;
