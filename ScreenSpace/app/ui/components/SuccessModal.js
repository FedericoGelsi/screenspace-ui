import React from 'react';
import {
  Button,
  Modal,
  Card,
  Text,
  Spinner,
  Layout,
} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export const SuccessModal = ({text, buttonText, action, isProcessing}) => {
  const [visible, setVisible] = React.useState(true);


  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => {
        setVisible(false);
        action();
      }}>
      {isProcessing ? (
        <Layout style={{backgroundColor: 'transparent'}}>
          <Spinner size="giant" status="info" />
        </Layout>
      ) : (
        <>
          <Card
            disabled={true}
            style={{
              width: '80%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <Text style={{marginBottom: 10, textAlign: 'center'}}>{text}</Text>
            <Button
              status="success"
              onPress={() => {
                setVisible(false);
                action();
              }}>
              {buttonText}
            </Button>
          </Card>
        </>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
