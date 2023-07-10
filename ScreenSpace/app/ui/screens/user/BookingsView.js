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
  const dispatch = useDispatch();

  const {bookings, error, isLoading} = useSelector(state => state.booking);
  const {userId} = useSelector(state => state.login);

  React.useEffect(() => {
    dispatch(getBooking(userId));
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
        {isLoading ? (
          <Layout style={styles.noDataContainer}>
            <Spinner size="giant" />
          </Layout>
        ) : (
          <>
            {bookings.length === 0 ? (
              <View style={styles.noDataContainer}>
                <Text category="h6" style={styles.title}>
                  {I18n.t(TEXT_KEY.userBookings.noData)}
                </Text>
              </View>
            ) : (
              <View style={styles.bookingContainer}>
                <List
                  contentContainerStyle={styles.contentContainer}
                  data={bookings}
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
