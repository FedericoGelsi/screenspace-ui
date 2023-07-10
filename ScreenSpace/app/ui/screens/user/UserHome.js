/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {Image, Modal, TextInput, View} from 'react-native';
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
import {
  getMoviesFilter,
  getMoviesInTheaters,
} from '../../../redux/slices/showingSlice';
import SearchBar from '../../components/SearchBar';
import {NoData} from '../../components/NoData';
import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

const UserHome = ({navigation, route}) => {
  const showing = useSelector(state => state.showing);
  const userClaims = useSelector(state => state.login.userClaims);
  const dispatch = useDispatch();
  const [isModalVisible, setisModalVisible] = useState(false);
  const [isFilterActive, setisFilterActive] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      let permission;
      if (Platform.OS === 'android') {
        permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
      } else if (Platform.OS === 'ios') {
        permission = PERMISSIONS.IOS.LOCATION_ALWAYS;
      }

      await request(permission);
    };

    requestLocationPermission();
  }, []);

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
  }, [showing, dispatch]);
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
        {I18n.t(TEXT_KEY.userHome.title)} {userClaims.username}!
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

  const uri = Image.resolveAssetSource(IMAGES.PNG.AVATAR_PNG).uri;

  const avatarUrl = userClaims?.avatar ?? uri;

  const formValuesRef = useRef({
    cinema: '',
    distance: '',
    genre: '',
    rating: '',
  });

  const handleInputChange = (name, value) => {
    formValuesRef.current[name] = value;
  };

  const handleSave = async () => {
    const {distance, genre, rating} = formValuesRef.current;
    try {
      const position = await new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        });
      });

      const {latitude, longitude} = position.coords;

      dispatch(
        getMoviesFilter({
          latitude: latitude,
          longitude: longitude,
          distance: distance,
          genre: genre,
          rating: rating,
        }),
      );

      formValuesRef.current = {
        distance: '',
        genre: '',
        rating: '',
      };
      setisFilterActive(true);
      setisModalVisible(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const ModalSearch = () => {
    return (
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}
        animationType="fade"
        transparent>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              width: '80%',
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 18, marginBottom: 10}}>
              Contenido del modal
            </Text>

            <TextInput
              style={{
                marginBottom: 10,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              placeholder="Distance in km"
              onChangeText={text => handleInputChange('distance', text)}
            />

            <TextInput
              style={{
                marginBottom: 10,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              placeholder="Genre"
              onChangeText={text => handleInputChange('genre', text)}
            />

            <TextInput
              style={{
                marginBottom: 10,
                padding: 10,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              placeholder="Rating"
              onChangeText={text => handleInputChange('rating', text)}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Button
                appearance="outline"
                size="small"
                onPress={() => setisModalVisible(false)}>
                Close
              </Button>
              <Button
                appearance="outline"
                size="small"
                onPress={() => handleSave()}>
                Search
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <ViewTopNavigationContainer
      accessoryLeft={LogoIcon}
      accessoryRight={accesoryRight}
      headerTitle={headerTitle}
      headerSubtitle={headerSubTitle}>
      <ModalSearch />
      <Layout style={{flex: 1, paddingHorizontal: 16}}>
        <Layout style={{flexDirection: 'row', paddingVertical: 16}}>
          <SearchBar
            style={{flex: 1, marginRight: 8}}
            placeholder={I18n.t(TEXT_KEY.userHome.searchBar.placeholder)}
            setValue={handleSearch}
          />
          {isFilterActive ? (
            <Button
              onPress={() => {
                dispatch(getMoviesInTheaters());
                setisFilterActive(false);
              }}
              appearance="outline"
              size="small"
              status="danger"
              accessoryLeft={props => <Icon {...props} name="trash-outline" />}>
              X
            </Button>
          ) : (
            <Button
              onPress={() => setisModalVisible(true)}
              appearance="outline"
              size="small"
              accessoryLeft={props => (
                <Icon {...props} name="funnel-outline" />
              )}>
              {I18n.t(TEXT_KEY.userHome.filter.buttonTitle)}
            </Button>
          )}
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
