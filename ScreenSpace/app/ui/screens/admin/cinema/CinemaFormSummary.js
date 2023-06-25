import React from 'react';
import {useSelector} from 'react-redux';
import {CinemaFormSummaryView} from './CinemaFormSummaryView';

const CinemaFormSummary = ({header, info}) => {
  const formValues = useSelector(state => state.form);
  return (
    <CinemaFormSummaryView
      header={header}
      info={info}
      formValues={formValues}
    />
  );
};

export default CinemaFormSummary;
