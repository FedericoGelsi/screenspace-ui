import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';
import {StyleSheet, View} from 'react-native';
import {List, Text, Spinner, Layout} from '@ui-kitten/components';
import {BookingCard} from '../../components/BookingCard';
import {useDispatch, useSelector} from 'react-redux';
import {getBooking} from '../../../redux/slices/bookingSlice';

const BookingsView = ({navigation}) => {
  const isLoadingMock = false;
  const bookingsMock = [
    {
      bookingCode: 'A8K9FZ3',
      movie: {
        id: 1,
        title: 'Inception',
        duration: 148,
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7uM4DyRVAcgagvhZoWrkrqMPbqV.jpg',
        genre: 'Action, Adventure, Sci-Fi',
        synopsis:
          'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        rating: 8.8,
        isShowing: true,
        releaseDate: '2010-07-16',
      },
      hallId: 12,
      timetable: 1625792045000,
      totalPrice: 1899.99,
      seats: ['C5', 'C6', 'C7'],
    },
    {
      bookingCode: 'X5M3QK9',
      movie: {
        id: 2,
        title: 'The Avengers',
        duration: 143,
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
        genre: 'Action, Adventure, Sci-Fi',
        synopsis:
          'A group of superheroes team up to save the world from a powerful enemy.',
        rating: 8.0,
        isShowing: true,
        releaseDate: '2012-05-04',
      },
      hallId: 24,
      timetable: 1625935261000,
      totalPrice: 1450.75,
      seats: ['A2', 'A3', 'A4'],
    },
    {
      bookingCode: 'P2R6NJ7',
      movie: {
        id: 3,
        title: 'The Shawshank Redemption',
        duration: 142,
        image:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg',
        genre: 'Drama',
        synopsis:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 9.3,
        isShowing: true,
        releaseDate: '1994-09-23',
      },
      hallId: 37,
      timetable: 1626064609000,
      totalPrice: 1650.5,
      seats: ['D8', 'D9', 'D10'],
    },
  ];
  const dispatch = useDispatch();

 // const {bookings, error, isLoading} = useSelector(state => state.Bookings);
  const {userId} = useSelector(state => state.login);

  React.useEffect(() => {
    //dispatch(getBooking(userId));
  }, [dispatch, userId]);

  const navigateBookingDetail = bookingItem => {
    const serializedBooking = JSON.stringify(bookingItem);
    navigation.push('BookingsViewDetail', {bookingSeri: serializedBooking});
  };

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      accessoryLeft={<></>}
      headerTitle={I18n.t(TEXT_KEY.userBookings.sectionName)}>
      <View style={styles.screenContainer}>
        {isLoadingMock ? (
          <Layout style={styles.noDataContainer}>
            <Spinner size="giant" />
          </Layout>
        ) : (
          <>
            {bookingsMock.length === 0 ? (
              <View style={styles.noDataContainer}>
                <Text category="h6" style={styles.title}>
                  {I18n.t(TEXT_KEY.userBookings.noData)}
                </Text>
              </View>
            ) : (
              <View style={styles.bookingContainer}>
                <List
                  contentContainerStyle={styles.contentContainer}
                  data={bookingsMock}
                  renderItem={item => (
                    <BookingCard
                      navigateAction={navigateBookingDetail}
                      item={item}
                    />
                  )}
                />
              </View>
            )}
          </>
        )}
      </View>
    </ViewTopNavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bookingContainer: {
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
});

export default BookingsView;
