import { StyleSheet } from 'react-native';
import { WHITE } from '../../../utils/colors';

const style = StyleSheet.create({
    input: {
        paddingLeft: 0,
        borderWidth: 0,
        textAlign: 'center',
        fontSize: 28,
        color: WHITE,
        fontFamily: 'WhitneyCondensed-Medium',
    },
    viewInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default style;
