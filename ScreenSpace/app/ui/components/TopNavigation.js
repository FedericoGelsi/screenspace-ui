import React from 'react';
import {
  Icon,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

const BackIcon = (props) => (
  <Icon
    {...props}
    name="arrow-back"
  />
);

const EditIcon = (props) => (
  <Icon
    {...props}
    name="edit"
  />
);

const MenuIcon = (props) => (
  <Icon
    {...props}
    name="more-vertical"
  />
);

const InfoIcon = (props) => (
  <Icon
    {...props}
    name="info"
  />
);

const LogoutIcon = (props) => (
  <Icon
    {...props}
    name="log-out"
  />
);

export const TopNavigationScreenSpace = () => {

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={toggleMenu}
    />
  );

  const renderRightActions = () => (
    <>
      <TopNavigationAction icon={EditIcon} />

      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={InfoIcon}
          title="About"
        />
        <MenuItem
          accessoryLeft={LogoutIcon}
          title="Logout"
        />
      </OverflowMenu>
    </>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} />
  );

  return (
    <Layout
      style={styles.container}
      level="1"
    >
      <TopNavigation
        alignment="center"
        title={I18n.t(TEXT_KEY.appName)}
        accessoryLeft={renderBackAction}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});
