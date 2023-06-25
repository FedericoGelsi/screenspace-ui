import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {completeForm} from '../../../../redux/slices/formSlice';
import {CinemaFormDetailsView} from './CinemaFormDetailsView';

export const CinemaFormDetails = () => {
  const formValues = useSelector(state => state.form);
  const dispatch = useDispatch();

  return (
    <CinemaFormDetailsView
      formValues={formValues}
      dispatch={dispatch}
      completeForm={completeForm}
    />
  );
};
