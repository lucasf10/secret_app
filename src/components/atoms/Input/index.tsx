import React from 'react';
import { TextInput, StyleProp, TextStyle } from 'react-native';

import styles from './style';

export interface Props {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  editable?: boolean;
  onChange?: (value: string) => void;
  style?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  maxLength?: number;
  multiline?: boolean;
  autoCapitalize?: 'characters' | 'words' | 'none';
}

const Input = (props: Props): React.ReactElement => {
  const {
    placeholder,
    style,
    value,
    onBlur,
    onFocus,
    onChange,
    secureTextEntry,
    placeholderTextColor,
    defaultValue,
    multiline,
    maxLength,
    editable = true,
    autoCapitalize = 'none',
  } = props;

  const customStyle = [styles.container, style];

  return (
    <TextInput
      maxLength={maxLength}
      multiline={multiline}
      placeholder={placeholder}
      style={customStyle}
      value={value}
      defaultValue={defaultValue}
      editable={editable}
      onBlur={onBlur}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      onChangeText={(_value) => onChange && onChange(_value)}
      autoCapitalize={autoCapitalize}
      placeholderTextColor={placeholderTextColor}
    />
  );
};

export default Input;
