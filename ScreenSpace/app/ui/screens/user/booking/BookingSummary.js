import React from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import {
  Button,
  Card,
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {
  newUserBooking,
  reset,
} from '../../../../redux/slices/movieBookingSlice';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {getMovieById, getMovies} from '../../../../redux/slices/moviesSlice';
import {getCinemasByMovie} from '../../../../redux/slices/userCinemaSlice';

const BookingSummary = ({navigation, route}) => {
  const movieBooking = useSelector(state => state.movieBooking);
  const cinemasValue = useSelector(state => state.userCinemas);
  // const moviesValue = useSelector(state => state.movies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // dispatch(getMovieById(movieBooking.movieId));
    dispatch(getCinemasByMovie(movieBooking.movieId));
  }, [dispatch, movieBooking]);

  const submitHandler = () => {
    dispatch(newUserBooking());
    navigation.push('BookingFeedback');
  };

  // console.log(moviesValue);
  const cinema = cinemasValue.cinemas.find(e => e.id === movieBooking.cinemaId);
  const movie = route.params.movie
  const data = [
    {
      icon: 'film-outline',
      label: 'Movie',
      value: movie.title,
    },
    {
      icon: 'pin-outline',
      label: 'Cinema',
      value: cinema.cinemaName,
    },
    {
      icon: 'grid-outline',
      label: 'Hall',
      value: movieBooking.hall.name,
    },
    {
      icon: 'calendar',
      label: 'Date',
      value: new Date(movieBooking.datetime).toLocaleDateString(),
    },
    {
      icon: 'clock-outline',
      label: 'Time',
      value: new Date(movieBooking.datetime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      icon: 'film-outline',
      label: 'Seats',
      value: movieBooking.seats.join(', '),
    },
  ];

  const renderItem = ({item, index}) => (
    <ListItem
      accessoryLeft={<Icon name={item.icon ? item.icon : 'info-outline'} />}
      title={item.value}
      description={item.label}
    />
  );
  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={I18n.t(TEXT_KEY.bookingSummary.sectionName)}>
      <Layout style={{flex: 1, justifyContent: 'center'}}>
        <Layout style={{marginVertical: 32, alignItems: 'center'}}>
          {
            <Text category="h4" style={{textAlign: 'center'}}>
              {I18n.t(TEXT_KEY.bookingSummary.title)}
            </Text>
          }
          <Text category="s1">{I18n.t(TEXT_KEY.bookingSummary.subtitle)}</Text>
        </Layout>
        <Card status="primary" style={{marginHorizontal: 8}}>
          <List
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
          />
        </Card>
      </Layout>
      <Layout>
        <Button style={{margin: 16}} status="success" onPress={submitHandler}>
          {I18n.t(TEXT_KEY.bookingSummary.buttonLabel)}
        </Button>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default BookingSummary;
