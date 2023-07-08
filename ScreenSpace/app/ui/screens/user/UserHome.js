import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {Image} from 'react-native';
import IMAGES from '../../../assets/images/Images';
import {Avatar, Layout, Spinner, Text} from '@ui-kitten/components';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';
import MovieCard from '../../components/user/MovieCard';
import GridLayout from '../../components/user/GridLayout';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovies,
} from '../../../redux/slices/moviesSlice';

const UserHome = ({navigation, route}) => {
  const moviesValues = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const [moviesData, setMoviesData] = React.useState(moviesValues.movies);

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  React.useEffect(() => {
    setMoviesData(moviesValues.movies);
  }, [moviesValues]);

  const LogoIcon = () => (
    <Image
      style={{height: 36, width: 36, marginLeft: 16}}
      source={IMAGES.PNG.ICON_PNG}
    />
  );

  const headerTitle = props => {
    return (
      <Text {...props} category="label">
        {I18n.t(TEXT_KEY.userHome.title)} {userClaims.user.givenName}!
      </Text>
    );
  };
  const headerSubTitle = props => {
    return (
      <Text {...props} category="s1">
        {I18n.t(TEXT_KEY.userHome.subtitle)}
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
        {moviesValues.isLoading ? (
          <Layout
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Spinner size="giant" />
          </Layout>
        ) : (
          moviesData.length !== 0 && (
            <GridLayout
              data={moviesData}
              renderItem={(style, item) => (
                <MovieCard style={style} item={item} navigation={navigation} />
              )}
              numColumns={2}
            />
          )
        )}
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
