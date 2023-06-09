import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import React from 'react';
import {Image, SafeAreaView} from 'react-native';

import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';
import IMAGES from '../../assets/images/Images';

const ViewTopNavigationContainer = ({
  variant,
  headerTitle,
  headerSubtitle,
  children,
  navigation,
  accessoryLeft,
  accessoryRight,
}) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const BackIcon = props => <Icon {...props} name="arrow-back" />;
  const LogoIcon = () => (
    <Image
      style={{height: 36, width: 36, marginLeft: 16}}
      source={IMAGES.PNG.ICON_PNG}
    />
  );

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      {variant === 'logo' ? (
        <TopNavigation
          title={I18n.t(TEXT_KEY.appName)}
          alignment="center"
          accessoryLeft={LogoIcon}
          accessoryRight={accessoryRight}
        />
      ) : (
        <TopNavigation
          title={headerTitle}
          subtitle={headerSubtitle}
          alignment="center"
          accessoryLeft={accessoryLeft ? accessoryLeft : BackAction}
          accessoryRight={accessoryRight}
        />
      )}
      <Divider />
      {children}
    </SafeAreaView>
  );
};

export default ViewTopNavigationContainer;
