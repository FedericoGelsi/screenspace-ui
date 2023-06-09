import React, {useState} from 'react';
import {CommonLogin} from '../../../components/CommonLogin';
import {
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import axios from '../../../../networking/api/Api';
import IMAGES from '../../../../assets/images/Images';

export const registerAPI = async (email, password) => {
  const results = await axios.post('/api/user', {
    email: email,
    password: password,
    role: 'admin',
  });
  return results.data;
};

export default function Registration({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  function handleTextEmail(text) {
    setEmail(text);
  }
  function handleTextPassword(text) {
    setPassword(text);
  }
  function handleTextConfirmPassword(text) {
    setConfirmPassword(text);
  }
  const navigateLogin = async () => {
    navigation.push('AdminLogin');
  };

  const RegisterNewUser = async () => {
    if (password === confirmPassword) {
      await registerAPI(email, password).then(() =>
        navigation.push('AdminLogin'),
      );
    } else {
      Alert.alert('Error', 'Try Again.');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.PNG.BACKGROUND_LOGIN_ADMIN}
        resizeMode="stretch"
        style={{flex: 1, justifyContent: 'center'}}>
        <CommonLogin
          mainTitle="Registration"
          mainButtonText="Create Account"
          bottonSectionSubText="Go back to "
          bottonSectionMainText="Login page"
          bottonSectionAction={navigateLogin}
          mainButtonAction={RegisterNewUser}>
          <TextInput
            style={styles.textInput}
            onChangeText={handleTextEmail}
            placeholder="Enter your email adress"
          />
          <TextInput
            onChangeText={handleTextPassword}
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Enter a password"
          />
          <TextInput
            onChangeText={handleTextConfirmPassword}
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Confirm password"
          />
        </CommonLogin>
      </ImageBackground>
    </SafeAreaView>
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
