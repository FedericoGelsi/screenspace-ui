/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Divider, Text, Icon, Layout} from '@ui-kitten/components';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';

const BookingsViewDetail = ({navigation, route}) => {
  const {bookingSeri} = route.params;
  const booking = JSON.parse(bookingSeri);
  const image = {uri: booking?.item.movie?.imageUrl};
  var totalPrice = parseFloat(booking.item.totalPrice);
  const fechaHora = new Date(booking.item.timetable);

  const dateFormated = fechaHora.toLocaleDateString();
  const timeFormated = fechaHora.toLocaleTimeString();

  return (
    <ViewTopNavigationContainer
      headerTitle={booking?.item.movie?.title}
      navigation={navigation}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.container}>
          {/*PRIMER COMPONENTE */}
          {/*Cinema*/}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="film-outline"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.cinema)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              {booking?.item?.cinemaName}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          {/*Date */}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="calendar-outline"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.date)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              {dateFormated}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          {/*Time */}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="clock-outline"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.time)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              {timeFormated}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          {/*Seats */}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="pricetags-outline"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.seats)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              {booking?.item.seats?.join(', ')}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
        </View>
        {/*SEGUNDO COMPONENTE */}
        <View style={styles.container}>
          {/*Price oer seat */}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="pricetags-outline"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.price)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              ${booking.item.pricePerSeat}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          {/*Cinema fee - Service fee */}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="alert-circle-outline"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.serviceFee)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              $3.00
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          {/*Total Bill */}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="alert-circle"
            />
            <Text category="s1" style={styles.text}>
              {I18n.t(TEXT_KEY.bookingDetail.total)}
            </Text>
            <Text category="s1" style={styles.textBooking}>
              ${booking.item.pricePerSeat * booking.item.seats.length + 3}
            </Text>
          </Layout>
        </View>
        {/*TERCER COMPONENTE */}
        <View style={styles.container}>
          {/*Reservation code Text */}
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Icon
              style={{width: 32, height: 32}}
              fill="#8F9BB3"
              name="pricetags-outline"
            />
            <Text
              category="s1"
              style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold'}}>
              {I18n.t(TEXT_KEY.bookingDetail.code)}
            </Text>
          </Layout>
          <Divider style={styles.divider} />
          {/*Code*/}
          <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              category="s1"
              style={{
                flexGrow: 1,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'blue',
              }}>
              {booking?.item.bookingCode}
            </Text>
          </Layout>
        </View>
      </ImageBackground>
    </ViewTopNavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: '90%',
    margin: 20,
  },
  divider: {
    marginBottom: 10,
  },
  layout: {
    width: '80%',
    margin: 10,
  },
  title: {
    marginBottom: 10,
  },
  textBooking: {
    flexGrow: 1,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
});

export default BookingsViewDetail;
