import { StyleSheet } from 'react-native';
import { WHITE } from '../../../utils/colors';

const style = StyleSheet.create({
    view: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        marginLeft: 8,
        color: WHITE,
        fontSize: 18,
        fontWeight: '500',
    },
});

export default style;
