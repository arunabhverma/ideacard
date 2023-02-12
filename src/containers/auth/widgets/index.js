import React from 'react';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {s, vs, ms} from 'react-native-size-matters/extend';
import {Text, TouchableRipple} from 'react-native-paper';
import CrossIcon from '@svg/cross.svg';
import {colors, center} from '@theme';

const Background = props => {
  return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.upper}>
        <Image source={require('@images/logo.png')} style={{width:s(222), height:vs(70), resizeMode:'contain'}} />
          <Text style={styles.welcomeText}>{props.firstText}</Text>
          <Text style={styles.subText}>{props.secondText}</Text>
        </View>
        <View style={styles.lower}>
          {props.children}
          <Text style={styles.bottomText}>
            {props.firstEndText}
            <Text
              onPress={props.onEndTextPress}
              style={{color: colors.primary}}>
              {props.lastEndText}
            </Text>
          </Text>
        </View>
    </KeyboardAwareScrollView>
  );
};

const CrossButton = ({onPress}) => {
  return (
    <TouchableRipple
      onPress={onPress}
      style={styles.closeIcon}
      rippleColor="rgba(0, 0, 0, .32)">
      <CrossIcon />
    </TouchableRipple>
  );
};

const HorizontalText = ({keyText, valueText}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: vs(10)}}>
      <Text style={styles.keyTextStyle}>{keyText}</Text>
      <Text style={styles.valueTextStyle}>{valueText}</Text>
    </View>
  );
};

const ModalData = ({onPress}) => {
  return (
    <>
      <CrossButton onPress={onPress} />
      <View>
        <Text style={styles.modalHeader}>Please contact us</Text>
        <HorizontalText
          keyText={'Phone number :   '}
          valueText={'9874563201'}
        />
        <HorizontalText
          keyText={'Email ID :   '}
          valueText={'User123@gmail.com'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  upper: {
    backgroundColor: colors.third,
    borderBottomLeftRadius: ms(50),
    borderBottomRightRadius: ms(50),
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lower: {
    marginTop: vs(-50),
    flex: 1.3,
    alignItems: 'center',
  },
  bottomText: {
    position: 'absolute',
    bottom: vs(34),
  },
  welcomeText: {
    fontFamily: 'Roboto-Medium',
    fontSize: ms(18),
    lineHeight: vs(21),
    color: colors.text,
    fontWeight: '500',
    marginTop: vs(15),
  },
  subText: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(14),
    lineHeight: vs(16),
    color: colors.text,
    marginTop: vs(5),
  },
  modalHeader: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(14),
    lineHeight: vs(17),
    fontWeight: '500',
  },
  keyTextStyle: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    lineHeight: vs(15),
    fontWeight: '400',
    color: 'rgba(151, 151, 151, 1)',
  },
  valueTextStyle: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    lineHeight: vs(15),
    fontWeight: '400',
    color: 'rgba(86, 71, 183, 1)',
  },
  closeIcon: {
    ...center,
    width: ms(20),
    height: ms(20),
    borderRadius: ms(10),
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export {Background, ModalData};
