import {Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

const SeatItem = ({status, seatId, setSelected}) => {
  const AvailableSeat = props => (
    <TouchableHighlight onPress={setSelected} style={styles.seatLayout}>
      <View style={styles.seatLayout}></View>
    </TouchableHighlight>
  );
  const SelectedSeat = ({seatId}) => (
    <TouchableHighlight onPress={setSelected} style={styles.seatLayout}>
      <View style={[styles.seatLayout, styles.selected]}>
        <Text style={styles.text} category="label">
          {seatId}
        </Text>
      </View>
    </TouchableHighlight>
  );
  const ReservedSeat = props => (
    <View style={[styles.seatLayout, styles.reserved]}></View>
  );
  const getLayout = (status, seatId) => {
    switch (status) {
      case Status.Available:
        return <AvailableSeat />;
      case Status.Reserved:
        return <ReservedSeat />;
      case Status.Selected:
        return <SelectedSeat seatId={seatId} />;
      default:
        break;
    }
  };

  return getLayout(status, seatId);
};

const styles = StyleSheet.create({
  seatLayout: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  reserved: {
    backgroundColor: '#FF8F1F',
  },
  selected: {
    backgroundColor: '#1677FF',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export const Status = {
  Available: 'Available',
  Reserved: 'Reserved',
  Selected: 'Selected',
};

export default SeatItem;
