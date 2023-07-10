import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../ViewTopNavigationContainer';
import SeatItem, {Status} from './SeatItem';
import {Button, Layout} from '@ui-kitten/components';
import GridLayout from '../GridLayout';
import SeatGridLeyend from './SeatGridLeyend';
import IncrementalButton from './IncrementalButton';
import {Image, View} from 'react-native';
import IMAGES from '../../../../assets/images/Images';
import {useDispatch, useSelector} from 'react-redux';
import {
  completeForm,
  newUserBooking,
  reset,
} from '../../../../redux/slices/movieBookingSlice';
import {ScrollView} from 'react-native-gesture-handler';

const SelectSeatsStep = ({navigation, route}) => {
  const show2 = {
    id: 12,
    hallHeight: 10,
    hallWidth: 8,
    movie: {
      id: 7,
      title: 'El señor de los anillos: El retorno del rey',
      duration: 201,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/23/The_Lord_of_the_Rings%2C_TROTK_%282003%29.jpg/220px-The_Lord_of_the_Rings%2C_TROTK_%282003%29.jpg',
      genres: [
        {
          id: 8,
          genre: 'Fantasia',
        },
        {
          id: 10,
          genre: 'Accion',
        },
        {
          id: 2,
          genre: 'Drama',
        },
      ],
      synopsis:
        'Gandalf y Aragorn lideran el mundo de los hombres contra la armada de Sauron para distraer su atención de Frodo y Sam, quienes se aproximan al Monte del Destino con el Anillo Único.',
      rating: 4.3,
      releaseDate: 61032441600000,
      reviews: [],
      showing: true,
    },
    datetime: 1689724800000,
    name: 'El señor de los anillos: El retorno del rey',
    availableSeats: [
      'A1',
      //   'A2',
      'A3',
      'A4',
      'A5',
      'A6',
      'A7',
      'A8',
      'B1',
      'B2',
      'B3',
      'B4',
      'B5',
      'B6',
      'B7',
      'B8',
      'C1',
      'C2',
      'C3',
      'C4',
      'C5',
      'C6',
      'C7',
      'C8',
      'D1',
      'D2',
      'D3',
      'D4',
      'D5',
      'D6',
      'D7',
      'D8',
      'E1',
      'E2',
      'E3',
      'E4',
      'E5',
      'E6',
      'E7',
      'E8',
      'F1',
      'F2',
      'F3',
      'F4',
      'F5',
      'F6',
      'F7',
      'F8',
      'G1',
      'G2',
      'G3',
      'G4',
      'G5',
      'G6',
      'G7',
      'G8',
      'H1',
      'H2',
      'H3',
      'H4',
      'H5',
      'H6',
      'H7',
      'H8',
      'I1',
      'I2',
      'I3',
      'I4',
      'I5',
      'I6',
      'I7',
      'I8',
      //   'J1',
      //   'J2',
      //   'J3',
      //   'J4',
      //   'J5',
      //   'J6',
      'J7',
      'J8',
    ],
  };

  const show = useSelector(state => state.movieBooking.show);
  const movieBooking = useSelector(state => state.movieBooking);
  const [hall, setHall] = useState(movieBooking.hall);
  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(newUserBooking());
    navigation.push('UserHome');
    dispatch(reset());
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
          <Button onPress={submitHandler}>Book Ticket</Button>
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default SelectSeatsStep;
