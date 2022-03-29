import { StyleSheet } from 'react-native';
import { GREY } from '../../utils/colors';

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 25,
    },
    logo: {
        height: 100,
        aspectRatio: 137 / 203,
        marginBottom: 30,
        marginRight: 15,
    },
    appTitle: {
        fontSize: 36,
        letterSpacing: 1,
    },
    subtitleWrapper: {
        alignItems: 'center',
        marginVertical: 20,
    },
    subtitleText: {
        fontSize: 24,
        lineHeight: 30,
    },
    loginButton: {
        fontSize: 20,
        color: GREY,
    },
    signUpButton: {
        marginTop: 50,
        marginBottom: 25,
    },
});

export default style;
