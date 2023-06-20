import React from 'react';
import {CommonLogin} from '../../../components/CommonLogin';
import {TextInput, StyleSheet} from 'react-native';

export default function Registration() {
  return (
    <CommonLogin
      mainTitle="Registration"
      mainButtonText="Create Account"
      bottonSectionSubText="Go back to "
      bottonSectionMainText="Login page">
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email adress"
      />
      <TextInput style={styles.textInput} placeholder="Enter a password" />
      <TextInput style={styles.textInput} placeholder="Confirm password" />
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
