import React from 'react';
import {Layout} from '@ui-kitten/components';
import PickCinemaStep from './PickCinemaStep';
import PickHallStep from './PickHallStep';
import PickMovieStep from './PickMovieStep';
import PickDateTimeStep from './PickDateTimeStep';
import NewShowSummary from './NewShowSummary';

const NewShowForm = ({currentPosition}) => {
  return (
    <Layout style={{flex: 1}}>
      {currentPosition === 0 && <PickCinemaStep />}
      {currentPosition === 1 && <PickHallStep />}
      {currentPosition === 2 && <PickMovieStep />}
      {currentPosition === 3 && <PickDateTimeStep />}
      {currentPosition === 4 && <NewShowSummary />}
    </Layout>
  );
};

export default NewShowForm;
