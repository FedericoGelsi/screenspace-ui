import React from 'react';
import {AdminProfileView} from './AdminProfileView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {reset} from '../../../../redux/slices/loginSlice';

export const AdminProfile = ({navigation}) => {
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    storeLoggedSession('false');
    dispatch(reset());
    navigation.popToTop();
  };

  const handleDeleteProfile = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    setShowModal(false);
    navigation.push('AdminLogin');
  };

  const storeLoggedSession = async value => {
    try {
      await AsyncStorage.setItem('logged', value);
    } catch (e) {
      // saving error
    }
  };

  return (
    <AdminProfileView
      handleCancel={handleCancel}
      handleConfirmDelete={handleConfirmDelete}
      handleDeleteProfile={handleDeleteProfile}
      navigation={navigation}
      showModal={showModal}
      handleLogout={handleLogout}
    />
  );
};
