import React, {useState} from 'react';
import {CommonLogin} from '../../../components/CommonLogin';
import {StyleSheet, TextInput, View, Text} from 'react-native';

export default function ResetPassword({navigation}) {
  const [pagina, setPagina] = useState(1);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //Logica primer componente-----------------------------------------------
  function handleClick1() {
    console.log('codigo de verificacion: hey ', code);
    setPagina(2);
  }

  function handleTextCode(text) {
    setCode(text);
  }

  //Logica segundo componente-----------------------------------------------
  function handleClick2() {
    console.log('nueva pass: ', newPassword, 'confirm: ', confirmPassword);
    setPagina(3);
  }

  function handleTextNewPassword(text) {
    setNewPassword(text);
  }

  function handleTextConfirm(text) {
    setConfirmPassword(text);
  }

  //Logica tercer componente-----------------------------------------------
  function handleClick3() {
    navigation.push('Login');
  }

  return (
    <CommonLogin
      mainTitle={
        pagina === 1
          ? 'Check your mail'
          : pagina === 2
          ? 'Password reset'
          : 'Successful reset'
      }
      mainButtonText={
        pagina === 1 ? 'Confirm' : pagina === 2 ? 'Reset password' : 'Login.'
      }
      mainButtonAction={
        pagina === 1 ? handleClick1 : pagina === 2 ? handleClick2 : handleClick3
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
