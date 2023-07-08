import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';

const SettingsView = ({navigation}) => {
  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      accessoryLeft={<></>}
      headerTitle={I18n.t(TEXT_KEY.userSettings.sectionName)}>

    </ViewTopNavigationContainer>
  );
};

export default SettingsView;
