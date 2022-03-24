import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './style';

export interface Props {
  title: string;
  textStyle?: TextStyle;
  viewStyle?: ViewStyle;
  accessibilityLabel?: string;
  onClick: () => void;
}

const Button = (props: Props): React.ReactElement => {
  const { title, textStyle, viewStyle, accessibilityLabel, onClick } = props;

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
    >
      <Text style={customTextStyle}>
          {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
