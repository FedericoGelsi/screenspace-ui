import React from 'react';
import { Layout } from '@ui-kitten/components';
import NewShowStep0 from './NewShowStep0';
import NewShowStep1 from './NewShowStep1';
import NewShowStep2 from './NewShowStep2';
import NewShowStep3 from './NewShowStep3';

const NewShowForm = ({currentPosition}) => {
  return (
    <Layout style={{flex: 1}}>
      {currentPosition === 0 && <NewShowStep0/>}
      {currentPosition === 1 && <NewShowStep1/>}
      {currentPosition === 2 && <NewShowStep2/>}
      {currentPosition === 3 && <NewShowStep3/>}
    </Layout>
  );
};

export default NewShowForm;
