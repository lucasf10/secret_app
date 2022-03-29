import React from 'react';
import { Text, TextStyle } from 'react-native';

import styles from './style';

export interface Props {
  children: any;
  style?: TextStyle;
  fontWeight?: 'Black'|'Book'|'Light'|'Medium'|'Semibold';
}

const DefaultFontText = ({ style, children, fontWeight = 'Light' }: Props): React.ReactElement => {
  const customStyle = {
    ...style,
    ...{ fontFamily: `WhitneyCondensed-${fontWeight}`},
  };

  return <Text style={customStyle}>{children}</Text>;
};

export default DefaultFontText;
