import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters/extend';
import UserIcon from '@svg/user.svg';
import EmailIcon from '@svg/email.svg';
import PhoneIcon from '@svg/phone.svg';
import LocationIcon from '@svg/location.svg';
import OpenEyeIcon from '@svg/openEye.svg';
import CloseEyeIcon from '@svg/closeEye.svg';
import {colors} from '@theme';
import {
  CustomTextInput,
  CustomButton,
  ContainerBox as Container,
} from '@components';
import {isEmail, isPassword} from '@utils';
import {Background} from '../widgets';

const Registration = ({navigation}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
    forgotModal: false,
    showPassword: true,
    showConfirmPassword: true,
  });

  const onChangeValue = (key, value) => {
    setState(prev => ({...prev, [key]: value}));
  };

  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Background
      firstText={'Create Account'}
      secondText={'Create a new account'}
      firstEndText={'Already have an account? '}
      lastEndText={'Login'}
      onEndTextPress={onPressLogin}>
      <Container>
        <CustomTextInput
          value={state.name}
          onChangeText={text => onChangeValue('name', text)}
          placeholder={'Full Name'}
          right={<UserIcon width={'100%'} />}
        />
        <CustomTextInput
          value={state.email}
          success={isEmail(state.email)}
          onChangeText={text => onChangeValue('email', text)}
          placeholder={'Email ID'}
          right={<EmailIcon width={'100%'} />}
          textInputStyle={{marginTop: vs(15)}}
        />
        <CustomTextInput
          value={state.phoneNumber}
          onChangeText={text => onChangeValue('phoneNumber', text)}
          placeholder={'Phone number'}
          right={<PhoneIcon width={'100%'} />}
          textInputStyle={{marginTop: vs(15)}}
        />
        <CustomTextInput
          value={state.address}
          onChangeText={text => onChangeValue('address', text)}
          placeholder={'Address'}
          right={<LocationIcon width={'100%'} />}
          textInputStyle={{marginTop: vs(15)}}
        />
        <CustomTextInput
          secureTextEntry={state.showPassword}
          value={state.password}
          onChangeText={text => onChangeValue('password', text)}
          success={isPassword(state.password)}
          placeholder={'Password'}
          right={
            state.showPassword ? (
              <OpenEyeIcon width={'100%'} style={{marginTop: vs(4)}} />
            ) : (
              <CloseEyeIcon width={'100%'} style={{marginTop: vs(4)}} />
            )
          }
          onPressRight={() =>
            setState(prev => ({...prev, showPassword: !prev.showPassword}))
          }
          textInputStyle={{marginTop: vs(15)}}
        />
        <CustomTextInput
          secureTextEntry={state.showConfirmPassword}
          value={state.confirmPassword}
          onChangeText={text => onChangeValue('confirmPassword', text)}
          success={isPassword(state.confirmPassword)}
          placeholder={'Confirm Password'}
          right={
            state.showConfirmPassword ? (
              <OpenEyeIcon width={'100%'} style={{marginTop: vs(4)}} />
            ) : (
              <CloseEyeIcon width={'100%'} style={{marginTop: vs(4)}} />
            )
          }
          onPressRight={() =>
            setState(prev => ({...prev, showConfirmPassword: !prev.showConfirmPassword}))
          }
          textInputStyle={{marginTop: vs(15)}}
        />
        <CustomButton
          onPress={() => navigation.navigate('BottomTabs')}
          text={'REGISTER'}
          style={{marginTop: vs(30)}}
        />
      </Container>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgetPasswordStyle: {
    color: colors.primary,
    textAlign: 'right',
    marginTop: vs(12),
  },
});

export default Registration;
