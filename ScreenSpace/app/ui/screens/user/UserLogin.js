import React, {useState} from 'react';
import {Avatar, Button, Card, Input, Layout, Text} from '@ui-kitten/components';
import { Image, ImageBackground, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { userUpdateGoogle } from '../../../redux/slices/loginSlice';
import IMAGES from '../../../assets/images/Images';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';
import ImagePicker from '../../components/user/ImagePicker';

const UserLogin = ({navigation, route}) => {
  // TODO: Get user data from redux
  const dispatch = useDispatch();
  const userClaims = useSelector(state => state.login.userClaims);
  const [value, setValue] = useState(userClaims.username);
  const uri = Image.resolveAssetSource(IMAGES.PNG.AVATAR_PNG).uri;
  const avatarUrl = userClaims?.avatar ?? uri;

  const handleSave = props => {
    userInfo = {
        userId: userClaims.id,
        email: userClaims.email,
        username: value,
        avatar: userClaims.avatar
      };
    
    dispatch(userUpdateGoogle(userInfo))
    navigation.push('UserHome');
  };

  const Header = props => (
    <Layout {...props} style={{marginVertical: 16}}>
      <Button appearance="ghost" status="control" size="tiny">
        {evaProps => (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 16,
            }}>
            <Avatar style={{height: 80, width: 80}} source={{uri: avatarUrl}} />
            <Text
              {...evaProps}
              style={{
                color: 'grey',
                textDecorationLine: 'underline',
                marginVertical: 8,
              }}>
              {I18n.t(TEXT_KEY.userLogin.form.avatarTip)}
            </Text>
          </View>
        )}
      </Button>
    </Layout>
  );

  const Footer = props => (
    <Layout {...props} style={{marginVertical: 16, alignItems: 'center'}}>
      <Text>{I18n.t(TEXT_KEY.userLogin.footer)}</Text>
      <Text style={{fontWeight: 'bold'}}>
        {I18n.t(TEXT_KEY.userSettings.sectionName)}
      </Text>
    </Layout>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.PNG.BACKGROUND2}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center', paddingHorizontal: 32}}>
        <View style={{flex: 1, marginVertical: 72}}>
          <View
            style={{
              flex: 5,
              justifyContent: 'center',
            }}>
            <Card
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
              header={Header}
              footer={Footer}>
              <Input
                label={I18n.t(TEXT_KEY.userLogin.form.username.label)}
                placeholder={I18n.t(
                  TEXT_KEY.userLogin.form.username.placeholder,
                )}
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
              />
            </Card>
          </View>
          <View
            style={{
              flex: 1,
              paddingVertical: 32,
            }}>
            <Button
              status="success"
              style={{borderRadius: 50}}
              onPress={handleSave}>
              {I18n.t(TEXT_KEY.userLogin.saveButtonText)}
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UserLogin;
