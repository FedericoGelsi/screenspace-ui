import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import ShareContent from '../../components/ShareContent';
import UserGeolocation from '../../components/UserGeolocation';
import {Button, Image} from 'react-native';
import IMAGES from '../../../assets/images/Images';
import {
  Avatar,
  Layout,
  Text,
} from '@ui-kitten/components';

const UserHome = ({navigation, route}) => {
  const navigateDetails = () => {
    navigation.push('MovieDetails');
  };

  const LogoIcon = () => (
    <Image
      style={{height: 36, width: 36, marginLeft: 16}}
      source={IMAGES.PNG.ICON_PNG}
    />
  );

  const headerTitle = props => {
    return (
      <Text {...props} category="label">
        Welcome {userClaims.user.givenName}!
      </Text>
    );
  };
  const headerSubTitle = props => {
    return (
      <Text {...props} category="s1">
        Let’s relax and watch a movie!
      </Text>
    );
  };

  const accesoryRight = props => {
    return <Avatar size="large" source={{uri: avatarUrl}} />;
  };

  const {userClaims} = route.params;
  const avatarUrl = userClaims?.user?.photo ?? IMAGES.PNG.AVATAR_PNG;

  return (
    <ViewTopNavigationContainer
      accessoryLeft={LogoIcon}
      accessoryRight={accesoryRight}
      headerTitle={headerTitle}
      headerSubtitle={headerSubTitle}>
      <Layout style={{flex: 1, padding: 16}}>
        <ShareContent />
        <UserGeolocation />
        <Button title="Details" onPress={navigateDetails} />
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
