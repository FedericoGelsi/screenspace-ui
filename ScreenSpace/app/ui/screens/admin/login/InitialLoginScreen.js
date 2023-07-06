import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, ImageBackground, SafeAreaView, View} from 'react-native';
import IMAGES from '../../../../assets/images/Images';

const InitialLoginScreen = ({navigation}) => {
  const LogoIcon = () => (
    <Image style={{height: 92, width: 92}} source={IMAGES.PNG.ICON_PNG} />
  );

  const navigateAdminLogin = () => {
    navigation.push('AdminLogin');
  };
  const navigateUserLogin = () => {
    navigation.push('UserHome');
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
              <Text category="h1">ScreenSpace</Text>
            </Layout>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 72,
              }}
              category="h4">
              Welcome to your all in one cinema booking app
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
              Login with Google
            </Button>
            <Button
              appearance="ghost"
              status="basic"
              size="small"
              accessoryLeft={<Icon name={'grid'} />}
              onPress={navigateAdminLogin}>
              Business Login
            </Button>
          </Layout>
        </Layout>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InitialLoginScreen;
