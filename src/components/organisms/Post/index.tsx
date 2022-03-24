/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// import styles from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faEmptyHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { PRIMARY, WHITE } from '../../../utils/colors';

// type Props = {

// };

const Post = (): React.ReactElement => {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <View style={{
            backgroundColor: '#000000',
            borderBottomWidth: 3,
            borderBottomColor: PRIMARY,
        }}>

            {/* PostContent Component */}

            <View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 300,
                paddingHorizontal: 20,
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: '#ffffff',
                    fontSize: 22,
                    fontWeight: 'bold',
                    marginTop: 40,
                }}>Peter Parker é o Homem-Aranha. &apos;0&apos;</Text>
            </View>

            {/* FooterPost Component */}

            <View style={{
                width:'100%',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
            }}>
                <TouchableOpacity onPress={() => console.log('Pressed comment icon')} >
                    <FontAwesomeIcon icon={faComment} color={WHITE} size={22} />
                </TouchableOpacity>

                <TouchableOpacity style={{marginLeft: 12}} onPress={() => setLiked(!liked)}>
                    <FontAwesomeIcon icon={liked ? faHeart : faEmptyHeart } color={WHITE} size={22} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Post;
