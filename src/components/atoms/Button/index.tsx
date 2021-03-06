import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './style';
import Text from '../DefaultFontText';

export interface Props {
  title: string;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
  accessibilityLabel?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = (props: Props): React.ReactElement => {
  const {
    title,
    textStyle,
    viewStyle,
    accessibilityLabel,
    disabled,
    onClick,
  } = props;

  const customViewStyle = {
    ...styles.view,
    ...viewStyle || {},
  };

  const customTextStyle = {
    ...styles.text,
    ...textStyle || {},
  };

  return (
    <TouchableOpacity
      style={customViewStyle}
      onPress={onClick}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled}
    >
      <Text fontWeight="Semibold" style={customTextStyle}>
          {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
