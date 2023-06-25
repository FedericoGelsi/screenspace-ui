import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Text, Icon, Modal, Button} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

export const AdminProfile = ({navigation}) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleLogout = () => {
    navigation.push('Login');
  };

  const handleDeleteProfile = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    navigation.push('Login');
  };

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={I18n.t(TEXT_KEY.adminProfileTitle)}>
      <View style={styles.container}>
        <Card style={styles.card} onPress={handleLogout}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Icon name="person" fill="#000" style={styles.icon} />
              <Text category="h6" style={styles.cardText}>
                Logout
              </Text>
            </View>
            <Icon
              name="arrow-ios-forward-outline"
              fill="#000"
              style={styles.arrowIcon}
            />
          </View>
        </Card>
        <Card style={styles.card} onPress={handleDeleteProfile}>
          <View style={styles.cardContent}>
            <View style={styles.leftContent}>
              <Icon name="slash-outline" fill="#FF0000" style={styles.icon} />
              <Text category="h6" style={[styles.cardText, styles.redText]}>
                Delete Profile
              </Text>
            </View>
            <Icon
              name="arrow-ios-forward-outline"
              fill="#FF0000"
              style={styles.arrowIcon}
            />
          </View>
        </Card>
      </View>
      <Modal
        visible={showModal}
        backdropStyle={styles.backdrop}
        onBackdropPress={handleCancel}>
        <View style={styles.modalContainer}>
          <Text category="h5" style={styles.modalTitle}>
            Are you sure you want to delete your profile?
          </Text>
          <Text style={styles.modalText}>
            If you delete your account, all your data will be erased.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
              appearance="ghost"
              status="basic">
              Cancel
            </Button>
            <Button
              style={[styles.button, styles.deleteButton]}
              onPress={handleConfirmDelete}>
              Delete Profile
            </Button>
          </View>
        </View>
      </Modal>
    </ViewTopNavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  cardText: {
    textAlign: 'left',
  },
  redText: {
    color: '#FF0000',
  },
  arrowIcon: {
    width: 24,
    height: 24,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '95%',
    alignSelf: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
  },
  cancelButton: {
    color: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
  },
});
