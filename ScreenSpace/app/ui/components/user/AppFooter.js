import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';

const HomeIcon = props => <Icon {...props} name="home-outline" />;

const BellIcon = props => <Icon {...props} name="bell-outline" />;

const SettingsIcon = props => <Icon {...props} name="settings-outline" />;

export const AppFooter = ({state}) => {
  
  return (
    <BottomNavigation {...state}>
      <BottomNavigationTab
        title={I18n.t(TEXT_KEY.userHome.bottonTabBar.firstTab)}
        icon={HomeIcon}
      />
      <BottomNavigationTab
        title={I18n.t(TEXT_KEY.userHome.bottonTabBar.secondTab)}
        icon={BellIcon}
      />
      <BottomNavigationTab
        title={I18n.t(TEXT_KEY.userHome.bottonTabBar.thirdTab)}
        icon={SettingsIcon}
      />
    </BottomNavigation>
  );
};

export default AppFooter;
