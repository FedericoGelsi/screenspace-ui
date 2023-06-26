import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Divider,
  List,
  Text,
  TopNavigationAction,
  Button,
  Spinner,
  Layout,
  Icon,
} from '@ui-kitten/components';
import {CinemaCard} from '../../../components/CinemaCard';
import {NoData} from '../../../components/NoData';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {useDispatch, useSelector} from 'react-redux';
import {getOwnerCinemas} from '../../../../redux/slices/ownerCinemasSlice';
import {loadHalls} from '../../../../redux/slices/hallSlice';
import ErrorScreen from '../../../components/ErrorScreen';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';

export const HomeScreenAdmin = ({navigation, route}) => {
  let refresh = route?.params ? route.params : false;
  const dispatch = useDispatch();
  const {cinemas, error, isLoading, hasError} = useSelector(
    state => state.ownerCinemas,
  );
  const {userId} = useSelector(state => state.login);

  React.useEffect(() => {
    dispatch(getOwnerCinemas(userId));
    if (refresh) dispatch(getOwnerCinemas(userId));
    refresh = false;
  }, [dispatch, refresh]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateNewCinema = () => {
    navigation.push('NewCinema');
  };

  const navigateCinemaDetails = cinemaIndex => {
    dispatch(loadHalls(cinemas[cinemaIndex].halls));
    navigation.push('CinemaDetails', {cinemaDetails: cinemas[cinemaIndex]});
  };

  const navigateCinemaShows = cinemaId => {
    navigation.push('CinemaShows', {cinemaId: cinemaId});
  };

  const navigateAdminProfile = () => {
    navigation.push('AdminProfile');
  };

  const AvatarIcon = props => <Icon {...props} name="person" />;

  const AvatarAction = () => (
    <TopNavigationAction icon={AvatarIcon} onPress={navigateAdminProfile} />
  );

  if (hasError) {
    return (
      <SafeAreaView>
        <ErrorScreen message={error} />
      </SafeAreaView>
    );
  }

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      variant="logo"
      accessoryRight={AvatarAction}>
      <View style={styles.screenContainer}>
        {isLoading ? (
          <Layout style={styles.noDataContainer}>
            <Spinner size="giant" />
          </Layout>
        ) : (
          <>
            {cinemas.length === 0 ? (
              <View style={styles.noDataContainer}>
                <Text category="h6" style={styles.title}>
                  {I18n.t(TEXT_KEY.cinemaHome.title)}
                </Text>
                <NoData message={I18n.t(TEXT_KEY.cinemaHome.noDataText)} />
              </View>
            ) : (
              <View style={styles.cinemaContainer}>
                <Text category="h6" style={styles.title}>
                  {I18n.t(TEXT_KEY.cinemaHome.title)}
                </Text>
                <List
                  contentContainerStyle={styles.contentContainer}
                  data={cinemas}
                  renderItem={item => (
                    <CinemaCard
                      navigateAction={navigateCinemaDetails}
                      navigateShows={() => navigateCinemaShows(item.item.id)}
                      item={item}
                    />
                  )}
                />
              </View>
            )}
          </>
        )}
        <Divider />
        <Layout style={styles.actionLayout}>
          <Button style={styles.buttonStyle} onPress={navigateNewCinema}>
            {I18n.t(TEXT_KEY.cinemaHome.newCinemaButtonText)}
          </Button>
        </Layout>
      </View>
    </ViewTopNavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: '100%',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cinemaContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    accentBackgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    flex: 1,
  },
  title: {
    marginTop: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  actionLayout: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 1000,
  },
});
