import React from 'react';
import {Layout} from '@ui-kitten/components';
import PickMovieStep from './PickMovieStep';
import PickDateTimeStep from './PickDateTimeStep';
import NewShowSummary from './NewShowSummary';

const EditShowForm = ({currentPosition}) => {
  return (
    <Layout style={{flex: 1}}>
      {currentPosition === 0 && <PickMovieStep />}
      {currentPosition === 1 && <PickDateTimeStep />}
      {currentPosition === 2 && <NewShowSummary />}
    </Layout>
  );
};

export default EditShowForm;
