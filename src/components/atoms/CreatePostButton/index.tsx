import React,{ useCallback } from 'react';
import {  TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './style';
import { WHITE, withOpacity } from '../../../utils/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { actions as postActions } from '../../../actions/post';
import { CreatePostProp } from '../../../scenes/createPost';

type Props = {
    navigation: CreatePostProp;
    text: string;
    color?: string;
    postColor: string;
    opacity?: string;
    textColor: string;
    backgroundImage?: string;
};

const CreatePostButton = ({ navigation, text, color, postColor, textColor, opacity, backgroundImage }: Props): React.ReactElement => {
    const dispatch = useDispatch();

    const opaqueColor = withOpacity(color || WHITE, 'CC' || opacity);

    const createPost = useCallback(() => {
        if (text && text !== '')
            dispatch(postActions.createPost(navigation, text, postColor, textColor, backgroundImage));
    }, [navigation, text, postColor, textColor, backgroundImage, dispatch]);

    return (
        <TouchableOpacity onPress={createPost} style={styles.sendButton}>
            <FontAwesomeIcon icon={faCheck} color={opaqueColor} size={22}/>
        </TouchableOpacity>
    );
};

export default CreatePostButton;
