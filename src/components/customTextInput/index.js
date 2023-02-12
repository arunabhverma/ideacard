import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {ms, vs, s} from 'react-native-size-matters/extend';
import {colors, shadow} from '@theme';
import {center} from '../../theme';

const CustomTextInput = ({right, ...props}) => {

    const successStyle = {borderColor: colors.success}
    const errorStyle = {borderColor: colors.error}
    const conditionStyle = props?.success ? successStyle : props.errorText ? errorStyle : {}
  return (
    <View>
      <View style={[styles.containerStyle, props.textInputStyle, conditionStyle]}>
        <TextInput
          value={'asdf'}
          onChangeText={() => {}}
          style={styles.inputStyle}
          {...props}
        />
        <TouchableRipple
          style={styles.rightIcon}
          borderless
          onPress={props.onPressRight}
          rippleColor="rgba(0, 0, 0, .32)">
          <View style={styles.iconStyle}>{right}</View>
        </TouchableRipple>
      </View>
      {props.errorText ? (
        <Text style={styles.errorTextStyle}>{props.errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth:1,
    borderColor:colors.surface,
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: ms(10),
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow,
  },
  inputStyle: {
    width: '90%',
    height: vs(40),
    borderRadius: ms(10),
    paddingLeft: s(20),
  },
  errorTextStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(11),
    lineHeight: vs(13),
    fontWeight: '400',
    color: colors.error,
    marginTop: vs(12),
  },
  rightIcon: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(15),
    marginRight: s(10),
    ...center,
  },
  iconStyle: {
    width: '100%',
    height: '100%',
    borderRadius: ms(50),
    ...center,
  },
});

export default CustomTextInput;
