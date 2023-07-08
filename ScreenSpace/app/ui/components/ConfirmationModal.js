import React from 'react';
import {Button, Modal, Text, Layout} from '@ui-kitten/components';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

export const ConfirmationModal = ({visible, onConfirm, onCancel}) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      visible={visible}
      backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
      onBackdropPress={handleCancel}>
      <Layout
        style={{
          backgroundColor: 'white',
          padding: 16,
          borderRadius: 4,
          alignItems: 'center',
        }}>
        <Text style={{marginBottom: 16}}>
          {I18n.t(TEXT_KEY.cinemaHalls.confirmationModalText)}
        </Text>

        <Layout style={{flexDirection: 'row'}}>
          <Button
            style={{marginRight: 8}}
            appearance="outline"
            onPress={handleCancel}>
            Cancel
          </Button>
          <Button onPress={handleConfirm}>Confirm</Button>
        </Layout>
      </Layout>
    </Modal>
  );
};
