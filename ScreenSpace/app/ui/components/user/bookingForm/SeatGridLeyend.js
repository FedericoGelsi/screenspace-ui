import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Status} from './SeatItem';

const SeatGridLeyend = () => {
  const Item = ({status}) => (
    <View style={styles.itemContainer}>
      <View style={[styles.circle, getStyle(status)]}></View>
      <Text category="label">{status}</Text>
    </View>
  );

  const getStyle = status => {
    switch (status) {
      case Status.Available:
        return styles.available;
      case Status.Reserved:
        return styles.reserved;
      case Status.Selected:
        return styles.selected;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Item status={Status.Available} />
      <Item status={Status.Selected} />
      <Item status={Status.Reserved} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 50,
    marginHorizontal: 8,
  },
  available: {
    backgroundColor: '#EEEEEE',
  },
  reserved: {
    backgroundColor: '#FF8F1F',
  },
  selected: {
    backgroundColor: '#1677FF',
  },
});

export default SeatGridLeyend;
