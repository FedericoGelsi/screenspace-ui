import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Button} from '@ui-kitten/components';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

export const HallCard = ({editHandler, removeHandler}) => (
  <Card style={styles.card}>
    <View style={styles.headerContainer}>
      <Text category="h6" style={{width: '50%'}}>
        Main Hall
      </Text>
      <View style={styles.actionLayout}>
        <Button
          status="danger"
          size="tiny"
          style={[styles.buttonStyle, {marginRight: 5}]}
          onPress={() => removeHandler()}>
          {I18n.t(TEXT_KEY.hallCard.removeButtonText)}
        </Button>
        <Button
          size="tiny"
          style={styles.buttonStyle}
          onPress={() => editHandler()}>
          {I18n.t(TEXT_KEY.hallCard.editButtonText)}
        </Button>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginTop: 30,
    borderColor: '#1677FF',
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#171717',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 1000,
    width: 65,
  },
});
