import React, {useState} from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {CommonLogin} from '../../../components/CommonLogin';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../../../redux/slices/loginSlice';
export const SignIn = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const navigationForgotPassword = () => {
    navigation.push('ForgotPassword');
  };

  const navigationRegister = () => {
    navigation.push('Registration');
  };

  function handleTextEmail(text) {
    setEmail(text);
  }
  function handleTextPassword(text) {
    setPassword(text);
  }

  const navigateDetails = async () => {
    await dispatch(userLogin({email: email, password: password})).then(() =>
      navigation.push('Home'),
    );
  };

  return (
    <CommonLogin
      mainTitle="Sign in"
      mainButtonText="Login"
      mainButtonAction={navigateDetails}
      bottonSectionSubText="Or register now "
      bottonSectionMainText="here"
      bottonSectionAction={navigationRegister}>
      <TextInput
        onChangeText={handleTextEmail}
        style={styles.textInput}
        placeholder="Email adress"
      />
      <TextInput
        onChangeText={handleTextPassword}
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Text onPress={navigationForgotPassword} style={styles.forgotPass}>
        Forgot password
      </Text>
    </CommonLogin>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    height: 50,
    paddingStart: 30,
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
  },
  forgotPass: {
    fontSize: 20,
    color: '#1677FF',
    padding: 15,
  },
});
