/* eslint-disable react-native/no-inline-styles */
import React,{ useCallback, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoggedStackParamList } from '../../navigation/LoggedStack';

import styles from './style';
import CloseButton from '../../components/atoms/CloseButton';
import { PostProp } from '../post';
import Input from '../../components/atoms/Input';
import { LIGHT_GREY, WHITE } from '../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faShuffle } from '@fortawesome/free-solid-svg-icons';
import { actions as postActions } from '../../actions/post';
import { AVAILABLE_COLORS } from '../../utils/constants';

export type CreatePostProp = NativeStackNavigationProp<LoggedStackParamList, 'CreatePost'>;

type Props = {
    navigation: CreatePostProp;
};

const CreatePostScreen = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('Share a secret');
    const [currentColor, setCurrentColor] = useState<string>('black');

    const switchColor = useCallback(() => {
        const currentIndex = AVAILABLE_COLORS.findIndex(color => color === currentColor);
        const nextIndex = (currentIndex >= AVAILABLE_COLORS.length - 1) ? 0 : currentIndex + 1;
        setCurrentColor(AVAILABLE_COLORS[nextIndex]);
    }, [currentColor]);

    const createPost = useCallback(() => {
        if (text && text !== '')
            dispatch(postActions.createPost(navigation, text, currentColor));
    }, [navigation, text, currentColor, dispatch]);

    return (
        <View style={{...styles.view, ...{ backgroundColor: currentColor }}}>
            <CloseButton color={WHITE} navigation={navigation as PostProp}/>
            <TouchableOpacity
                onPress={createPost}
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 1,
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                }}
            >
                <FontAwesomeIcon
                    icon={faCheck}
                    color={WHITE}
                    size={22}
                />
            </TouchableOpacity>

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Input
                    multiline
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor={LIGHT_GREY}
                    onChange={(value: string) => setText(value)}
                    onFocus={() => setPlaceholder('')}
                    style={{
                        paddingLeft: 0,
                        borderWidth: 0,
                        textAlign: 'center',
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: WHITE,
                    }}
                />
            </View>

            <View style={{
                width:'100%',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
            }}>
                <TouchableOpacity onPress={switchColor}>
                    <FontAwesomeIcon
                        icon={faShuffle}
                        color={WHITE}
                        size={22}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CreatePostScreen;
