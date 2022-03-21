import React from 'react';
import { Text, TextStyle } from 'react-native';

import styles from './style';

export interface Props {
  children: React.ReactElement|string;
  style?: TextStyle;
}

const DefaultFontText = ({ style, children }: Props): React.ReactElement => {

  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

export default DefaultFontText;
