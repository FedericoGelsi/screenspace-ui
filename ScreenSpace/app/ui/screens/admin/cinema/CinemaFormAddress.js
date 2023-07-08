import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {completeForm} from '../../../../redux/slices/formSlice';
import {CinemaFormAddressView} from './CinemaFormAddressView';

export const CinemaFormAddress = () => {
  const formValues = useSelector(state => state.form);
  const dispatch = useDispatch();

  return (
    <CinemaFormAddressView
      formValues={formValues}
      dispatch={dispatch}
      completeForm={completeForm}
    />
  );
};
