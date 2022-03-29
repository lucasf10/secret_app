import { StyleSheet } from 'react-native';
import { LIGHT_GREY, PRIMARY } from '../../../utils/colors';

const style = StyleSheet.create({
    view: {
        flexDirection: 'row',
        borderTopColor: LIGHT_GREY,
        borderTopWidth: 1,
    },
    input: {
        flex: 1,
        borderWidth: 0,
        paddingLeft: 15,
        fontSize: 20,
        fontFamily: 'WhitneyCondensed-Book',
    },
    viewButton: {
        backgroundColor: 'transparent',
        width: 80,
    },
    textButton: {
        fontSize: 18,
        color: PRIMARY,
    },
});

export default style;
