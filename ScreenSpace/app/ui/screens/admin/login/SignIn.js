import React, {useState} from 'react';
import {Text, TextInput, StyleSheet, Alert} from 'react-native';
import {CommonLogin} from '../../../components/CommonLogin';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../../../redux/slices/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLoggedSession = async (value, userId) => {
  try {
    await AsyncStorage.setItem('logged', value);
    console.log(userId);
    await AsyncStorage.setItem('userId', userId.toString());
  } catch (e) {
    // saving error
  }
};
export const SignIn = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.login);

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
    await dispatch(userLogin({email: email, password: password})).then(
      async response => {
        if (response.payload && response.payload.token) {
          await storeLoggedSession(
            response.payload.token,
            response.payload.userId,
          );
          navigation.push('Home');
        } else {
          Alert.alert(
            'Error',
            'Incorrect email or password.\nPlease try again.',
          );
        }
      },
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
