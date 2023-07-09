import {Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const InfoItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Icon name={item.icon} fill="#1677ff" style={styles.icon} />
      <Text style={styles.label} category="c1">
        {item.label}
      </Text>
      <Text style={styles.value} category="label">
        {item.value}
      </Text>
    </View>
  );
};

export default InfoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
  },
  value: {
    textAlign: 'center',
    fontSize: 14,
  },
});
