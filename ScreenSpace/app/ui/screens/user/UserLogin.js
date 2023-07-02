import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {Avatar, Button, Card, Input, Layout, Text} from '@ui-kitten/components';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import IMAGES from '../../../assets/images/Images';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';
import ImagePicker from '../../components/user/ImagePicker';

const UserLogin = ({navigation}) => {
  const [value, setValue] = useState('');

  const Header = props => (
    <Layout {...props} style={{marginVertical: 16}}>
      <Button appearance="ghost" status="control" size="tiny">
        {evaProps => (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Avatar size="giant" source={IMAGES.PNG.AVATAR_PNG} />
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
            <Button status="success" style={{borderRadius: 50}}>
              {I18n.t(TEXT_KEY.userLogin.saveButtonText)}
            </Button>
            <ImagePicker/>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UserLogin;
