import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {TopNavigation, Divider} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Restart from 'react-native-restart';

const ErrorScreen = ({message}) => {
  const reloadApp = () => {
    Restart.Restart();
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TopNavigation
        title="ScreenSpace"
        alignment="center"
        style={{height: '8%'}}
      />
      <Divider />
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/icons/computer.png')}
            style={styles.image}
          />
          <Text style={styles.message}>{message}</Text>
          <Button title="Reload App" onPress={reloadApp} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  message: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  safeAreaContainer: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
});

export default ErrorScreen;
