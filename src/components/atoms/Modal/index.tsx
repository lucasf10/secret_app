import React from 'react';
import { ViewStyle, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';

import styles from './style';

export interface Props {
  style?: ViewStyle;
  children: React.ReactElement;
  visible: boolean;
  onClose?: () => void;
  swipeDirection?: 'up' | 'down' | 'left' | 'right';
}

const ModalComponent = (props: Props): React.ReactElement => {
  const { style, children, visible, onClose, swipeDirection } = props;

  const customStyle = {
    ...style,
  };

  return (
    <Modal
      animationIn="slideInUp"
      coverScreen={true}
      style={customStyle}
      isVisible={visible}
      swipeDirection={swipeDirection || 'down'}
      onSwipeComplete={onClose}
      onModalHide={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalComponent;
