import React from 'react';
import {Layout} from '@ui-kitten/components';
import BookingCinemaStep from './BookingCinemaStep';
import BookingDateStep from './BookingDateStep';
import BookingTimeStep from './BookingTimeStep';
import SelectSeatsStep from '../../../components/user/bookingForm/SelectSeatsStep';

const BookingSteps = ({currentPosition}) => {
  return (
    <Layout style={{flex: 1}}>
      {currentPosition === 0 && <BookingCinemaStep />}
      {currentPosition === 1 && <BookingDateStep />}
      {currentPosition === 2 && <BookingTimeStep />}
    </Layout>
  );
};

export default BookingSteps;
