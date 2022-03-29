import { StyleSheet } from 'react-native';
import { PRIMARY, WHITE } from '../../../utils/colors';

const style = StyleSheet.create({
    view: {
        backgroundColor: PRIMARY,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        color: WHITE,
        fontSize: 20,
        letterSpacing: 1,
    },
});

export default style;
