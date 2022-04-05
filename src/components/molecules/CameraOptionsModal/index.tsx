import { faCamera, faClose, faImage, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PRIMARY } from '../../../utils/colors';

import Modal from '../../atoms/Modal';

import styles from './style';

export interface Props {
  visible: boolean;
  onClose: () => void;
  onSelectCamera?: () => void;
  onSelectGallery?: () => void;
  onRemovePicture?: () => void;
}

const CameraOptionsModal = ({
  visible,
  onClose,
  onSelectCamera,
  onSelectGallery,
  onRemovePicture,
}: Props): React.ReactElement => {
  return (
    <Modal style={styles.modalPosition} visible={visible} onClose={onClose}>
      <View style={styles.view}>
        {onSelectCamera && (
          <TouchableOpacity onPress={onSelectCamera} style={styles.option}>
            <FontAwesomeIcon color={PRIMARY} icon={faCamera} size={24} />
            <Text style={styles.text}>Take a picture</Text>
          </TouchableOpacity>
        )}
        {onSelectGallery && (
          <TouchableOpacity onPress={onSelectGallery} style={styles.option}>
            <FontAwesomeIcon color={PRIMARY} icon={faImage} size={24} />
            <Text style={styles.text}>
              Choose a picture
            </Text>
          </TouchableOpacity>
        )}
        {onRemovePicture && (
          <TouchableOpacity onPress={onRemovePicture} style={styles.option}>
            <FontAwesomeIcon color={PRIMARY} icon={faTrash} size={24} />
            <Text style={styles.text}>
              Remove picture
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onClose} style={styles.lastOption}>
          <FontAwesomeIcon color={PRIMARY} icon={faClose} size={24} />
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CameraOptionsModal;
