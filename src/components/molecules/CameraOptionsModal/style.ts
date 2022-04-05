import { StyleSheet } from 'react-native';
import { PRIMARY, GREY } from '../../../utils/colors';

const style = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  modalPosition: {
    width: '100%',
    marginLeft: 0,
    marginBottom: 0,
  },
  option: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
    alignItems: 'center',
  },
  lastOption: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 0,
  },
  text: {
    marginLeft: 20,
    lineHeight: 30,
    fontSize: 20,
    color: PRIMARY,
    fontFamily: 'WhitneyCondensed-Book',
  },
});

export default style;
