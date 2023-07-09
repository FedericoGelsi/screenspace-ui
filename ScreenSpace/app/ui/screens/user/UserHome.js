import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {Image} from 'react-native';
import IMAGES from '../../../assets/images/Images';
import {
  Avatar,
  Button,
  Icon,
  Layout,
  Spinner,
  Text,
} from '@ui-kitten/components';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';
import MovieCard from '../../components/user/MovieCard';
import GridLayout from '../../components/user/GridLayout';
import {useDispatch, useSelector} from 'react-redux';
import {getMoviesInTheaters} from '../../../redux/slices/showingSlice';
import SearchBar from '../../components/SearchBar';
import {NoData} from '../../components/NoData';

const UserHome = ({navigation, route}) => {
  const showing = useSelector(state => state.showing);
  const dispatch = useDispatch();
  function removeDuplicates(arr) {
    const uniqueIds = [];
    let unique = arr.filter(element => {
      const isDuplicate = uniqueIds.includes(element.movie.id);

      if (!isDuplicate) {
        uniqueIds.push(element.movie.id);

        return true;
      }

      return false;
    });
    return unique;
  }
  const [moviesData, setMoviesData] = React.useState(showing.movies);

  React.useEffect(() => {
    dispatch(getMoviesInTheaters());
  }, [dispatch, handleSearch]);

  React.useEffect(() => {
    setMoviesData(showing.movies);
  }, [showing]);
  const handleSearch = movieName => {
    setMoviesData(
      showing.movies.filter(item => {

        return item.movie.title.toLowerCase().includes(movieName.toLowerCase());
      }),
    );
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
      <Layout style={{flex: 1, paddingHorizontal: 16}}>
        <Layout style={{flexDirection: 'row', paddingVertical: 16}}>
          <SearchBar
            style={{flex: 1, marginRight: 8}}
            placeholder={I18n.t(TEXT_KEY.userHome.searchBar.placeholder)}
            setValue={handleSearch}
          />
          <Button
            appearance="outline"
            size="small"
            accessoryLeft={props => <Icon {...props} name="funnel-outline" />}>
            {I18n.t(TEXT_KEY.userHome.filter.buttonTitle)}
          </Button>
        </Layout>
        <Text category="h5">
          {I18n.t(TEXT_KEY.userHome.showingSectionName)}
        </Text>
        <Layout style={{flex: 1, paddingTop: 16, paddingBottom: 8}}>
          {showing.isLoading ? (
            <Layout
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Spinner size="giant" />
            </Layout>
          ) : moviesData.length !== 0 ? (
            <GridLayout
              data={removeDuplicates(moviesData)}
              renderItem={(style, item) => (
                <MovieCard
                  style={style}
                  item={item.movie}
                  navigation={navigation}
                />
              )}
            />
          ) : (
            <NoData message={I18n.t(TEXT_KEY.userHome.noShowsMessage)}></NoData>
          )}
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default UserHome;
