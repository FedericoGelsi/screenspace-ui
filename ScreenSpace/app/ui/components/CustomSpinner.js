import React from 'react';
import {Modal, Spinner, Layout} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export const CustomSpinner = () => {
  return (
    <Modal visible={true} backdropStyle={styles.backdrop}>
      <Layout style={{backgroundColor: 'transparent'}}>
        <Spinner size="giant" status="info" />
      </Layout>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
