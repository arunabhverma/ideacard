import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters/extend';
import {Text, TouchableRipple} from 'react-native-paper';
import {colors, center} from '@theme';
import ProfileIcon from '@svg/profile.svg';
import EditIcon from '@svg/edit.svg';
import GreaterIcon from '@svg/greater.svg';

const Settings = ({navigation}) => {
  const IconWrapper = ({children, style, ...rest}) => {
    return (
      <TouchableRipple
        {...rest}
        style={{padding: ms(10), borderRadius: ms(50), ...style}}
        rippleColor="rgba(0, 0, 0, .32)">
        {children}
      </TouchableRipple>
    );
  };

  const Value = ({header, value, style}) => {
    return (
      <View style={[styles.valueContainer, style]}>
        <View>
          <Text style={styles.title}>{header}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
        <IconWrapper onPress={() => {}}>
          <EditIcon />
        </IconWrapper>
      </View>
    );
  };

  const Option = ({text, style, onPress}) => {
    return (
      <TouchableRipple
        style={[styles.optionWrapper, style]}
        rippleColor="rgba(0, 0, 0, .32)"
        onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text>{text}</Text>
          <GreaterIcon />
        </View>
      </TouchableRipple>
    );
  };

  return (
    <SafeAreaView backgroundColor={colors.headerGray} style={{flex: 1}}>
      <View style={styles.header} />
      <View style={styles.rest}>
        <View style={styles.profileIconWrapper}>
          <ProfileIcon />
        </View>
        <Text style={styles.headText}>Ms Shusmita Gupta</Text>
        <Text style={styles.subText}>Parent</Text>
        <Text style={styles.subText}>User123@gmail.com</Text>
        <Value
          style={{marginTop: vs(8)}}
          header={'Name'}
          value={'Ms Shusmita Gupta'}
          onPress={() => alert('hello')}
        />
        <Value
          header={'Gender'}
          value={'Female'}
          onPress={() => alert('hello')}
        />
        <Value
          header={'Address'}
          value={'86/245 Raipurwa, Kanpur'}
          onPress={() => alert('hello')}
        />
        <Value
          style={{borderBottomWidth: 1.25}}
          header={'Contact'}
          value={'9874563210'}
          onPress={() => alert('hello')}
        />
        <Option onPress={() => navigation.navigate('ManageKids')} style={{marginTop: vs(10)}} text={'Manage Kids'} />
        <Option text={'Change Password'} />
        <Option text={'Logout'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.headerGray,
    height: vs(136),
  },
  rest: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.third,
  },
  profileIconWrapper: {
    marginTop: -ms(50),
    height: ms(100),
    width: ms(100),
    borderRadius: ms(50),
    backgroundColor: colors.surface,
    ...center,
  },
  headText: {
    marginTop: vs(9.17),
    fontFamily: 'Inter-Regular',
    fontSize: ms(15),
    lineHeight: vs(15),
    fontWeight: '400',
  },
  subText: {
    color: colors.grayText,
    marginTop: vs(5),
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    lineHeight: vs(14.52),
    fontWeight: '400',
  },
  valueContainer: {
    paddingLeft: s(30),
    paddingRight: s(10.22),
    width: '100%',
    border: 0,
    borderColor: '#D9D9D9',
    paddingVertical: vs(12),
    borderTopWidth: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(13),
    lineHeight: vs(16),
    fontWeight: '400',
    color: colors.grayText1,
  },
  value: {
    marginTop: vs(7),
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    fontWeight: '400',
    lineHeight: vs(19),
  },
  optionWrapper: {
    width: '100%',
    paddingLeft: s(30),
    paddingRight: s(24),
    paddingTop: vs(10),
    paddingBottom: vs(10),
    border: 0,
    borderColor: '#D9D9D9',
  },
  optionText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingLeft: s(30),
    paddingRight: s(24),
    paddingTop: vs(20),
    border: 0,
    borderColor: '#D9D9D9',
  },
});

export default Settings;
