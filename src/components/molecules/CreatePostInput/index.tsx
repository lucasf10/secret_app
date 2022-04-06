import React,{ useState } from 'react';
import { View } from 'react-native';

import styles from './style';
import Input from '../../../components/atoms/Input';
import { BLACK, LIGHT_GREY, WHITE } from '../../../utils/colors';

type Props = {
    text: string;
    onChange: (value: string) => void;
    color: string;
};

const CreatePostInput = ({ text, onChange, color }: Props): React.ReactElement => {
    const [placeholder, setPlaceholder] = useState<string>('Share a secret');

    return (
        <View style={styles.viewInput}>
            <Input
                multiline
                value={text}
                placeholder={placeholder}
                placeholderTextColor={color === WHITE ? LIGHT_GREY : `${BLACK}CC` }
                onChange={onChange}
                onFocus={() => setPlaceholder('')}
                style={{
                    ...styles.input,
                    ...{ color },
                }}
            />
        </View>
    );
};

export default CreatePostInput;
