import React from 'react';
import { ActivityIndicator, ColorValue, ViewStyle } from 'react-native';
import { PRIMARY } from '../../../utils/colors';

export interface Props {
  style?: ViewStyle;
  color?: ColorValue;
  size?: number | 'small' | 'large';
}

const Loader = ({ style, color, size }: Props): React.ReactElement => {
  return <ActivityIndicator style={style} size={size || 'large'} color={color || PRIMARY} />;
};

export default Loader;
