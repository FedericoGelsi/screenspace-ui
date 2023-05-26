import React from 'react';
import { Input } from '@ui-kitten/components';
import { StyleSheet} from 'react-native';

export const CinemaFormDetails = () => {

    const [priceValue, setPriceValue] = React.useState('');

  return (
    <>
        <Input
        label="Cinema name"
        placeholder="Cinema name"
        size="large"
        style={styles.formCtrl}
        />
        <Input
          label="Company Name"
          placeholder="Company Name"
          size="large"
          style={styles.formCtrl}
        />
        <Input
          label="Price per show"
          placeholder="Insert price ($)"
          keyboardType = 'numeric'
          size="large"
          style={styles.formCtrl}
          onChangeText={(text) => setPriceValue(text)}
        />
        <Input
          label="Company Name"
          placeholder="Company Name"
          size="large"
          style={styles.formCtrl}
        />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  formCtrl: {
    marginBottom: 30,
  },
});
