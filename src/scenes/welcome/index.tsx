import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/WelcomeStack';
import Button from '../../components/atoms/Button';

import styles from './style';
import { Logo } from '../../assets/images';

type WelcomeProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
    navigation: WelcomeProp;
};

const WelcomeScreen = ({ navigation }: Props): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />

            <Text style={styles.appTitle}>secret</Text>

            <View style={styles.subtitleWrapper}>
                <Text style={styles.subtitleText}>Share anonymously with your region.</Text>
                <Text style={styles.subtitleText}>Speak freely.</Text>
            </View>

            <Button
                accessibilityLabel="Sign Up"
                onClick={() => console.log('Sign Up clicado')}
                title="Sign Up"
                viewStyle={styles.signUpButton}
            />

            <TouchableOpacity
                onPress={() => console.log('Already have an account button pressed')}
            >
                <Text style={styles.loginButton}>I already have an account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;
