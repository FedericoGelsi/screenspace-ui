import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

export const HallHeader = ({handleModal}) => {
  return (
    <Layout style={styles.headerContainer}>
      <Text category="h6">{I18n.t(TEXT_KEY.hallHeader.headerTitle)}</Text>
      <Button
        size="tiny"
        style={styles.buttonStyle}
        onPress={() => handleModal(true)}>
        {I18n.t(TEXT_KEY.hallHeader.addButtonText)}
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 1000,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '2%',
    left: '2%',
    width: '95%',
    top: '2%',
  },
});
