import React from 'react';
import {AdminProfileView} from './AdminProfileView';

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
