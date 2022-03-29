import React,{ useState } from 'react';
import { View } from 'react-native';

import styles from './style';
import Input from '../../../components/atoms/Input';
import { LIGHT_GREY } from '../../../utils/colors';

type Props = {
    text: string;
    onChange: (value: string) => void;
};

const CreatePostInput = ({ text, onChange }: Props): React.ReactElement => {
    const [placeholder, setPlaceholder] = useState<string>('Share a secret');

    return (
        <View style={styles.viewInput}>
            <Input
                multiline
                value={text}
                placeholder={placeholder}
                placeholderTextColor={LIGHT_GREY}
                onChange={onChange}
                onFocus={() => setPlaceholder('')}
                style={styles.input}
            />
        </View>
    );
};

export default CreatePostInput;
