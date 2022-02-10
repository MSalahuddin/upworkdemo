import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';
import {Metrics, Fonts, Colors} from '../../theme';

export default ({
  title,
  customSubmitBtn,
  onPress,
  costomSubmitBtnText,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.submitBtn,
        customSubmitBtn,
        {backgroundColor: disabled ? '#00663d' : '#00663d'},
      ]}
      onPress={onPress}>
      <Text style={{...styles.submitBtnText, ...costomSubmitBtnText}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
