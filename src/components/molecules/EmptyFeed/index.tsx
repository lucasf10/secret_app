import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';
import Button from '../../atoms/Button';
import { FeedProp } from '../../../scenes/feed';

type Props = {
    navigation: FeedProp;
}

const EmptyFeed = ({ navigation }: Props): React.ReactElement => {
    const goToCreatePost = () => navigation.navigate('CreatePost');

    return (
        <View style={styles.view}>
            <Text style={styles.text}>Nobody has shared a secret in your town yet.</Text>
            <Button
                title={'Click here to be the first one!'}
                onClick={goToCreatePost}
                viewStyle={styles.button}
            />
        </View>
    );
};

export default EmptyFeed;
