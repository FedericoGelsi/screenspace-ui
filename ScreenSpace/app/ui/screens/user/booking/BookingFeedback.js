import React from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {View} from 'react-native';
import {Button, Card, Icon, Layout, Text} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {reset} from '../../../../redux/slices/movieBookingSlice';
import {getBooking} from '../../../../redux/slices/bookingSlice';

const BookingFeedback = ({navigation}) => {
  const movieBooking = useSelector(state => state.movieBooking);
  const dispatch = useDispatch();

  const navigateHome = () => {
    navigation.navigate('UserHome');
    dispatch(reset());
  };
  return (
    <ViewTopNavigationContainer variant="logo">
      <Layout style={{flex: 1, padding: 16, justifyContent: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            style={{width: 48, height: 48}}
            fill="#00B383"
            name="checkmark-circle-2"
          />
          <Text category="h4">{I18n.t(TEXT_KEY.bookingFeedback.title)}</Text>
          <Text style={{textAlign: 'center', marginVertical: 16}} category="s1">
            {I18n.t(TEXT_KEY.bookingFeedback.subTitle)}
          </Text>
        </View>
        <Card
          status='success'
          style={{marginVertical: 16, borderColor:'#000'}}
          header={props => (
            <View
              style={{
                marginVertical: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                style={{width: 32, height: 32, marginHorizontal: 16}}
                fill="#000"
                name="credit-card-outline"
              />
              <Text category="h6">
                {I18n.t(TEXT_KEY.bookingFeedback.cardTitle)}
              </Text>
            </View>
          )}>
          <Text status="primary" style={{alignSelf: 'center'}} category="h6">
            {movieBooking.bookingCode}
          </Text>
        </Card>
        <Button
          style={{marginVertical: 16}}
          appearance="ghost"
          status="primary"
          onPress={navigateHome}>
          {I18n.t(TEXT_KEY.bookingFeedback.buttonLabel)}
        </Button>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default BookingFeedback;
