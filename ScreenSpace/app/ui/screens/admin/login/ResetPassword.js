import React, {useState} from 'react';
import {CommonLogin} from '../../../components/CommonLogin';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import axios from '../../../../networking/api/Api';
import IMAGES from '../../../../assets/images/Images';

export const firstCodeVerify = async (email, verificationCode) => {
  const results = await axios.post('/api/auths/verify-reset-code', {
    email: email,
    verificationCode: verificationCode,
  });
  return results;
};

export const secondResetPass = async (email, newPassword) => {
  const results = await axios.post('/api/auths/new-password', {
    email: email,
    newPassword: newPassword,
  });
  return results;
};

export default function ResetPassword({navigation, route}) {
  const [pagina, setPagina] = useState(1);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {email} = route.params;

  //Logica primer componente-----------------------------------------------
  async function handleClick1() {
    console.log('codigo de verificacion: hey ', code);
    const results = await firstCodeVerify(email, code);
    if (results.status === 200) {
      setPagina(2);
    } else {
      Alert.alert('Error', 'Try again please.');
    }
  }

  function handleTextCode(text) {
    setCode(text);
  }

  //Logica segundo componente-----------------------------------------------
  async function handleClick2() {
    console.log('nueva pass: ', newPassword, 'confirm: ', confirmPassword);
    if (newPassword === confirmPassword) {
      const results = await secondResetPass(email, newPassword);
      results.status === 200
        ? setPagina(3)
        : Alert.alert('Error', 'Try again please.');
    } else {
      Alert.alert(
        'Error',
        'Sorry, the new password and confirmation password do not match',
      );
    }
  }

  function handleTextNewPassword(text) {
    setNewPassword(text);
  }

  function handleTextConfirm(text) {
    setConfirmPassword(text);
  }

  //Logica tercer componente-----------------------------------------------
  function handleClick3() {
    navigation.push('AdminLogin');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.PNG.BACKGROUND_LOGIN_ADMIN}
        resizeMode="stretch"
        style={{flex: 1, justifyContent: 'center'}}>
        <CommonLogin
          mainTitle={
            pagina === 1
              ? 'Check your mail'
              : pagina === 2
              ? 'Password reset'
              : 'Successful reset'
          }
          mainButtonText={
            pagina === 1
              ? 'Confirm'
              : pagina === 2
              ? 'Reset password'
              : 'Login.'
          }
          mainButtonAction={
            pagina === 1
              ? handleClick1
              : pagina === 2
              ? handleClick2
              : handleClick3
          }>
          {pagina === 1 ? (
            <FirstContent setcode={setCode} handleTextCode={handleTextCode} />
          ) : pagina === 2 ? (
            <SecondContent
              setNewPassword={setNewPassword}
              setConfirmPassword={setConfirmPassword}
              handleTextConfirm={handleTextConfirm}
              handleTextNewPassword={handleTextNewPassword}
            />
          ) : (
            <ThirdContent />
          )}
        </CommonLogin>
      </ImageBackground>
    </SafeAreaView>
  );
}

const FirstContent = ({handleTextCode}) => {
  return (
    <>
      <Text style={styles.subTitleFirst}>
        Please enter the 4 digits code that you received on the email associated
        to your account
      </Text>
      <View style={styles.inputContainerFirst}>
        <TextInput
          style={styles.textInputFirst}
          onChangeText={handleTextCode}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
    </>
  );
};

const SecondContent = ({handleTextNewPassword, handleTextConfirm}) => {
  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Enter the new password"
        onChangeText={handleTextNewPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Confirm the password"
        onChangeText={handleTextConfirm}
        secureTextEntry={true}
      />
    </>
  );
};

const ThirdContent = () => {
  return (
    <>
      <Text style={styles.subTitleThird}>
        Your password has been reset successfully. Please login with your new
        password.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainerFirst: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInputFirst: {
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    width: '20%',
    height: 50,
    padding: 10,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f1f1f1',
  },
  subTitleFirst: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
  },
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
  subTitleThird: {
    width: '80%',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
