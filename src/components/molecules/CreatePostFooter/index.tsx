import React from 'react';
import { View } from 'react-native';

import ShuffleButton from '../../atoms/ShuffleButton';
import styles from './style';

type Props = {
    onSwitchColor: (color: string) => void;
    currentColor: string;
};

const CreatePostFooter = ({ currentColor, onSwitchColor }: Props): React.ReactElement => {

    return (
        <View style={styles.view}>
            <ShuffleButton
                onSwitchColor={onSwitchColor}
                currentColor={currentColor}
            />
        </View>
    );
};

export default CreatePostFooter;
