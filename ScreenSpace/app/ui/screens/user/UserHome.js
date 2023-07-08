import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import { Layout, Text } from '@ui-kitten/components';
import AppFooter from '../../components/user/AppFooter';

const UserHome = ({navigation}) => {
  return (
    <ViewTopNavigationContainer navigation={navigation} footer={<AppFooter/>}>
      <Layout>

      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
