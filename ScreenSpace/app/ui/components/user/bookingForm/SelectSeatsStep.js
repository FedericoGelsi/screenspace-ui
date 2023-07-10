import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../ViewTopNavigationContainer';
import SeatItem, {Status} from './SeatItem';
import {Button, Icon, Layout} from '@ui-kitten/components';
import GridLayout from '../GridLayout';
import SeatGridLeyend from './SeatGridLeyend';
import IncrementalButton from './IncrementalButton';
import {Image, View} from 'react-native';
import IMAGES from '../../../../assets/images/Images';
import {useDispatch, useSelector} from 'react-redux';
import {completeForm} from '../../../../redux/slices/movieBookingSlice';
import {ScrollView} from 'react-native-gesture-handler';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const SelectSeatsStep = ({navigation, route}) => {
  const show = useSelector(state => state.movieBooking.show);
  const movieBooking = useSelector(state => state.movieBooking);
  const [hall, setHall] = useState(movieBooking.hall);
  const dispatch = useDispatch();

  const navigateSummary = () => {
    navigation.push('BookingSummary');
  };

  const initialMapping = () => {
    let seatMap = new Array();
    for (let i = 0; i < hall.height; i++) {
      for (let j = 0; j < hall.width; j++) {
        const fila = String.fromCharCode('A'.charCodeAt(0) + i);
        const number = j + 1;
        const seatId = fila + String(number);
        seatMap.push({
          status: show.availableSeats.includes(seatId)
            ? Status.Available
            : Status.Reserved,
          seatId: seatId,
        });
      }
    }
    return seatMap;
  };

  const [seatMap, setSeatMap] = useState(initialMapping);
  const [seatsQty, setSeatsQty] = useState(0);

  const handleSelectSeat = item => {
    let temp = Array.from(seatMap);
    const seat = temp.find(seat => seat.seatId === item.seatId);
    let newSeat = {...seat};
    newSeat.status =
      seat.status === Status.Available ? Status.Selected : Status.Available;
    const selectedSeats = temp.filter(s => s.status === Status.Selected).length;
    if (newSeat.status === Status.Selected) {
      if (selectedSeats < seatsQty) {
        const index = temp.indexOf(seat);
        if (~index) {
          temp[index] = newSeat;
        }
      }
    } else {
      const index = temp.indexOf(seat);
      if (~index) {
        temp[index] = newSeat;
      }
    }
    const selectedSeatsArray = temp.filter(s => s.status === Status.Selected);
    const selectedSeatsId = selectedSeatsArray.map(s => s.seatId);
    dispatch(completeForm({key: 'seats', value: selectedSeatsId}));
    setSeatMap(temp);
  };

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={'Select Seats'}
      headerSubtitle={route.params.movie.title}>
      <Layout style={{flex: 1, padding: 16}}>
        <View style={{flex: 1}}>
          <Layout
            style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{padding: 8}}>
              <Image
                style={{height: 32}}
                resizeMode="contain"
                source={IMAGES.PNG.SCREEN_PNG}
              />
            </View>
            <ScrollView horizontal>
              <GridLayout
                data={seatMap}
                numColumns={hall.width}
                renderItem={(style, item) => {
                  return (
                    <SeatItem
                      status={item.status}
                      seatId={item.seatId}
                      setSelected={() => handleSelectSeat(item)}
                    />
                  );
                }}
              />
            </ScrollView>
            <SeatGridLeyend />
          </Layout>
          <Layout style={{flex: 1, justifyContent: 'center'}}>
            <IncrementalButton
              title={'Seats'}
              value={seatsQty}
              handler={setSeatsQty}
              limit={show?.availableSeats?.length}
            />
          </Layout>
        </View>
        <Layout style={{justifyContent: 'center'}}>
          <Button
            style={{flex: 1}}
            appearance="outline"
            accessoryRight={<Icon name="arrow-forward" />}
            onPress={navigateSummary}>
            {I18n.t(TEXT_KEY.newCinemaShow.nextStepButtonLabel)}
          </Button>
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default SelectSeatsStep;
