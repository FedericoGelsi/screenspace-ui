import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text, Icon} from '@ui-kitten/components';

const NoDataIcon = props => (
  <Icon style={styles.icon} fill="#8F9BB3" name="inbox-outline" />
);

export const NoData = ({message = 'Default Message'}) => {
  return (
    <View style={styles.container}>
      <NoDataIcon />
      <Text appearance="hint" style={styles.text}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    flexGrow: 1,
  },
  icon: {
    width: 80,
    height: 80,
  },
  text: {
    textAlign: 'center',
  },
});
