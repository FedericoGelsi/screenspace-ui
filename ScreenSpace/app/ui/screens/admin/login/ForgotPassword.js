import React, {useState} from 'react';
import {CommonLogin} from '../../../components/CommonLogin';
import {TextInput, StyleSheet, Alert} from 'react-native';
import axios from '../../../../networking/api/Api';

export const registerAPI = async email => {
  const results = await axios.post('/api/auths/reset-password', {
    email: email,
  });
  return results;
};

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');

  function handleTextEmail(text) {
    setEmail(text);
  }
  const navigateResetPass = async () => {
    const results = await registerAPI(email);
    if (results.status === 200) {
      navigation.push('ResetPassword', {email: email});
    } else {
      Alert.alert('Error', 'Try again please.');
    }
  };
  const navigateLogin = async () => {
    navigation.push('Login');
  };
  return (
    <CommonLogin
      mainTitle="Forgot Password"
      mainButtonText="Continue"
      bottonSectionSubText="Or go back to "
      bottonSectionMainText="Login page"
      bottonSectionAction={navigateLogin}
      mainButtonAction={navigateResetPass}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleTextEmail}
        placeholder="Enter your email adress"
      />
    </CommonLogin>
  );
}

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
});
