import { StyleSheet } from 'react-native';

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
        marginBottom: 50,
        marginRight: 15,
    },
    appTitle: {
        fontSize: 30,
        fontWeight: '500',
    },
    subtitleWrapper: {
        alignItems: 'center',
        marginVertical: 20,
    },
    subtitleText: {
        fontSize: 18,
    },
    loginButton: {
        fontSize: 16,
        color: '#a9a8a8',
    },
    signUpButton: {
        marginTop: 50,
        marginBottom: 25,
    },
});

export default style;
