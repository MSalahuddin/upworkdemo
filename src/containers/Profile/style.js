import {StyleSheet} from 'react-native';

import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.HanBlue,
    height: Metrics.screenHeight * 0.2,
  },
  avatar: {
    width: Metrics.screenWidth * 0.2,
    height: Metrics.screenWidth * 0.2,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    marginVertical: Metrics.screenHeight * 0.02,
    alignSelf: 'center',
  },

  body: {
    height: Metrics.screenHeight * 0.9,
    marginBottom: 15,
    flex: 1,
  },
  bodyContent: {
    flex: 1,
  },
  nameContainer: {
    alignSelf: 'center',
  },
  amountContainer: {
    // flex: 1,
    height: Metrics.screenHeight * 0.1,
    backgroundColor: Colors.white,
    backgroundColor: 'red',
  },
  infoContainer: {
    height: Metrics.screenHeight * 0.3,
    backgroundColor: Colors.white,
  },
  tenantContainer: {
    flex: 1,
    marginTop: Metrics.screenHeight * 0.02,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  tenantSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: Metrics.screenWidth * 0.05,
    color: 'black',
  },
  rd: {
    flexDirection: 'row',
  },
  hWidth: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    width: '30%',
    marginTop: 20,
  },
  nameHead: {
    marginLeft: 10,
  },
  builingContainer: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  unitContainer: {
    flex: 1,
    backgroundColor: 'purple',
  },
  name: {
    fontSize: Metrics.screenWidth * 0.05,
    fontWeight: 'normal',
    color: 'black',
  },
  amount: {
    fontSize: Metrics.screenWidth * 0.08,
    fontWeight: 'normal',
    color: 'black',
  },
  info: {
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
  },
});
