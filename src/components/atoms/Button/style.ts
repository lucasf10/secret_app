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
        fontWeight: '700',
        fontSize: 18,
    },
});

export default style;
