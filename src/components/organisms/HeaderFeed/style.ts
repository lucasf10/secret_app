import { StyleSheet } from 'react-native';
import { BLACK, LIGHT_GREY, WHITE } from '../../../utils/colors';

const style = StyleSheet.create({
    headerView: {
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: WHITE,
        borderBottomColor: LIGHT_GREY,
        borderBottomWidth: 1,
        shadowColor: BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logo: {
        height: '100%',
        marginRight: 10,
    },
});

export default style;
