import {Button, Icon, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {Image, ImageBackground, SafeAreaView, View} from 'react-native';
import IMAGES from '../../assets/images/Images';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginGoogle} from '../../redux/slices/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InitialLoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const isNewUser = useSelector(state => state.login.isNewUser);
  const token = useSelector(state => state.login.token);
  const isOwner = useSelector(state => state.login.isOwner);

  React.useEffect(() => {
    if (token != '' && !isOwner) {
      if (isNewUser) {
        navigation.push('UserLogin');
      } else {
        navigation.push('UserHome');
      }
    }
  }, [token]);

  const LogoIcon = () => (
    <Image style={{height: 92, width: 92}} source={IMAGES.PNG.ICON_PNG} />
  );

  const navigateAdminLogin = () => {
    navigation.push('AdminLogin');
  };
  const navigateUserLogin = async () => {
    console.log('Pressed button');
    // GoogleSignin.revokeAccess();
    // GoogleSignin.signOut();
    await GoogleSignUp();
  };

  const GoogleSignUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // var googleInfo = await GoogleSignin.signIn().then(result => result);
      var googleInfo = await GoogleSignin.signIn();
      console.log(googleInfo);
      dispatch(userLoginGoogle(googleInfo.idToken));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log('Standard Error');
        console.log(error);
      }
    }
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
