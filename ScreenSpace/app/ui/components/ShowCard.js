import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Icon, Text} from '@ui-kitten/components';

const Header = props => (
  <View {...props}>
    <Text category="h6">Everything Everywhere All at Once</Text>
  </View>
);

const Footer = props => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Button style={styles.footerControl} size="small" status="basic">
      CANCEL
    </Button>
    <Button style={styles.footerControl} size="small">
      ACCEPT
    </Button>
  </View>
);

const ShowCard = () => {
  return (
    <Card style={styles.card} header={Header}>
      <View style={styles.footerContainer}>
        <Text>Main Hall - 22:00</Text>
        <View style={styles.buttonContainer}>
          <Button
            status="primary"
            style={styles.footerControl}
            size="small"
            accessoryLeft={<Icon name="edit-2-outline" />}
          />
          <Button
            status="danger"
            style={styles.footerControl}
            size="small"
            accessoryLeft={<Icon name="trash-2-outline" />}
          />
        </View>
      </View>
    </Card>
  );
};

export default ShowCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
});
