import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, ImageBackground, SafeAreaView, View} from 'react-native';
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
        source={IMAGES.PNG.BACKGROUND2}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <View style={{flex: 1, marginVertical: 72}}>
          <View
            style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 64,
              }}>
              <LogoIcon />
              <Text category="h1">{I18n.t(TEXT_KEY.initialLogin.title)}</Text>
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginHorizontal: 32,
              }}
              category="h4">
              {I18n.t(TEXT_KEY.initialLogin.subtitle)}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 16,
              paddingVertical: 32,
              justifyContent: 'space-evenly',
            }}>
            <Button
              accessoryLeft={<Icon name={'google'} />}
              onPress={navigateUserLogin}
              style={{borderRadius: 50}}>
              {I18n.t(TEXT_KEY.initialLogin.buttons.userLogin)}
            </Button>
            <Button
              status="basic"
              size="small"
              accessoryLeft={props => <Icon {...props} name={'grid'} />}
              onPress={navigateAdminLogin}
              style={{
                backgroundColor: 'transparent',
                borderColor: 'transparent',
              }}>
              {evaProps => (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    {...evaProps}
                    style={{
                      color: '#333333',
                      fontWeight: 'bold',
                    }}>
                    {I18n.t(TEXT_KEY.initialLogin.buttons.adminLogin)}
                  </Text>
                </View>
              )}
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default InitialLoginScreen;
