import { StyleSheet } from 'react-native';
import { DARK_GREY, GREY } from '../../../utils/colors';

const style = StyleSheet.create({
    view: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },
    text: {
        color: DARK_GREY,
        fontSize: 18,
    },
    meta: {
        fontWeight: 'bold',
        color: GREY,
        marginTop: 2,
    },
});

export default style;
