// @flow
import {StyleSheet} from 'react-native';

import {Metrics, Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  submitBtn: {
    padding: Metrics.ratio(8),
    alignItems: 'center',
    marginVertical: Metrics.ratio(5),
    borderRadius: Metrics.ratio(5),
  },
  submitBtnText: {
    fontSize: Metrics.ratio(12),
    color: "white"
  },
});
