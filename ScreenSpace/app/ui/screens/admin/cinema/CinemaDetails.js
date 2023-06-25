import React from 'react';
import {useDispatch} from 'react-redux';
import {loadFormBack} from '../../../../redux/slices/formSlice';
import {CinemaDetailsView} from './CinemaDetailsView';

export const CinemaDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {cinemaDetails} = route.params;

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateHalls = () => {
    navigation.push('CinemaHalls', {cinemaId: cinemaDetails.id});
  };

  const navigateEditCinema = () => {
    navigation.push('NewCinema', {edit: true, cinemaId: cinemaDetails.id});
    dispatch(loadFormBack(cinemaDetails));
  };

  return (
    <CinemaDetailsView
      navigateBack={navigateBack}
      cinemaDetails={cinemaDetails}
      navigateEditCinema={navigateEditCinema}
      navigateHalls={navigateHalls}
    />
  );
};
