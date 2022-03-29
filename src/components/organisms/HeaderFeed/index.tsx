import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { faPenToSquare, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { PRIMARY } from '../../../utils/colors';
import styles from './style';
import { Logo } from '../../../assets/images';
import { actions as userActions} from '../../../actions/user';
import { FeedProp } from '../../../scenes/feed';

type Props = {
    navigation: FeedProp;
}

const HeaderFeed = ({ navigation }: Props): React.ReactElement => {
    const dispatch = useDispatch();

    const LogOut = () => dispatch(userActions.signOut());
    const goToCreatePost = () => navigation.navigate('CreatePost');

    return (
      <View style={styles.headerView}>
          <TouchableOpacity onPress={LogOut}>
              <FontAwesomeIcon icon={faRightFromBracket} color={PRIMARY} size={22} />
          </TouchableOpacity>

          <Image resizeMode="contain" source={Logo} style={styles.logo} />

          <TouchableOpacity onPress={goToCreatePost}>
              <FontAwesomeIcon icon={faPenToSquare} color={PRIMARY} size={22} />
          </TouchableOpacity>
      </View>
    );
};

export default HeaderFeed;
