import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, ImageBackground, SafeAreaView} from 'react-native';
import IMAGES from '../../assets/images/Images';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';
const InitialLoginScreen = ({navigation}) => {
  const LogoIcon = () => (
    <Image style={{height: 92, width: 92}} source={IMAGES.PNG.ICON_PNG} />
  );

  const navigateAdminLogin = () => {
    navigation.push('AdminLogin');
  };
  const navigateUserLogin = () => {
    navigation.push('UserLogin');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.PNG.BACKGROUND}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <Layout style={{flex: 1, marginVertical: 72, borderRadius: 1000}}>
          <Layout
            style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Layout
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 64,
              }}>
              <LogoIcon />
              <Text category="h1">{I18n.t(TEXT_KEY.initialLogin.title)}</Text>
            </Layout>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 72,
              }}
              category="h4">
              {I18n.t(TEXT_KEY.initialLogin.subtitle)}
            </Text>
          </Layout>
          <Layout
            style={{
              flex: 1,
              paddingHorizontal: 16,
              paddingVertical: 32,
              justifyContent: 'space-evenly',
            }}>
            <Button
              accessoryLeft={<Icon name={'google'} />}
              onPress={navigateUserLogin}>
              {I18n.t(TEXT_KEY.initialLogin.buttons.userLogin)}
            </Button>
            <Button
              appearance="ghost"
              status="basic"
              size="small"
              accessoryLeft={<Icon name={'grid'} />}
              onPress={navigateAdminLogin}>
              {I18n.t(TEXT_KEY.initialLogin.buttons.adminLogin)}
            </Button>
          </Layout>
        </Layout>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InitialLoginScreen;
