import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ms, vs} from 'react-native-size-matters/extend';
import {Text} from 'react-native-paper';
import {colors} from '@theme';
import UserIcon from '@svg/user.svg';
import KeyIcon from '@svg/key.svg';
import {
  CustomTextInput,
  CustomButton,
  ModalWrapper,
  ContainerBox as Container,
} from '@components';
import {isEmail, isPassword} from '@utils';
import {Background, ModalData} from '../widgets';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    forgotModal: false,
  });

  const onChangeEmail = email => {
    setState(prev => ({...prev, email}));
  };

  const onChangePassword = password => {
    setState(prev => ({...prev, password}));
  };

  const onForgotPassword = () => {
    setState(prev => ({...prev, forgotModal: !prev.forgotModal}));
  };

  const onPressRegister = () => {
    navigation.navigate('Registraion')
  }

  return (
    <Background
      firstText={'Welcome back !'}
      secondText={'Login to your account'}
      firstEndText={"Don't have an account? "}
      lastEndText={'create an account'}
      onEndTextPress={onPressRegister}>
      <Container>
        <CustomTextInput
          value={state.email}
          onChangeText={onChangeEmail}
          success={isEmail(state.email)}
          placeholder={'Email/Phone'}
          right={<UserIcon width={'100%'} />}
        />
        <CustomTextInput
          secureTextEntry
          value={state.password}
          onChangeText={onChangePassword}
          success={isPassword(state.password)}
          placeholder={'Password'}
          right={<KeyIcon width={'100%'} />}
          textInputStyle={{marginTop: vs(15)}}
        />
        <Text onPress={onForgotPassword} style={styles.forgetPasswordStyle}>
          Forgot Password?
        </Text>
        <CustomButton
          onPress={() => alert('Login')}
          text={'LOGIN'}
          style={{marginTop: vs(30)}}
        />
      </Container>
      <ModalWrapper isVisible={state.forgotModal} onClose={onForgotPassword}>
        <ModalData onPress={onForgotPassword} />
      </ModalWrapper>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgetPasswordStyle: {
    fontFamily: 'Roboto-Regular',
    fontSize: ms(11),
    lineHeight: vs(13),
    fontWeight: '400',
    color: colors.primary,
    textAlign: 'right',
    marginTop: vs(12),
  },
});

export default Login;
