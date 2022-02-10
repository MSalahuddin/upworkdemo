// @flow
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
  },
  textHeading: {
    fontSize: width * 0.07
  },
  loginContainer: {
    backgroundColor: "white",
    width: width * 0.85,
    paddingHorizontal: width * 0.07,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  textInputStyle: {
    width: width * 0.8,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  btnContainer: {
    width: width * 0.8,
    height: 50,
    backgroundColor: "#309EC7",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50
  },
  btnText: {
    fontSize: 20,
    color: "white"
  },

});
