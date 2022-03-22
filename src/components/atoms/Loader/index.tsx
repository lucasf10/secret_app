import React from 'react';
import { ActivityIndicator, ColorValue, ViewStyle } from 'react-native';
import { PRIMARY } from '../../../utils/colors';

export interface Props {
  style?: ViewStyle;
  color?: ColorValue
}

const Loader = ({ style, color }: Props): React.ReactElement => {
  return <ActivityIndicator style={style} size="large" color={color || PRIMARY} />;
};

export default Loader;
