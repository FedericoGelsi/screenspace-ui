import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  reset,
  isDetailsComplete,
  isAddressComplete,
  editCinema,
} from '../../../../redux/slices/formSlice';
import {createCinema} from '../../../../redux/slices/formSlice';
import ErrorScreen from '../../../components/ErrorScreen';
import {CinemaFormView} from './CinemaFormView';

export const CinemaForm = ({navigation, route}) => {
  let edit = route?.params?.edit ? route.params.edit : false;
  const dispatch = useDispatch();
  const formValues = useSelector(state => state.form);
  const detailsComplete = useSelector(isDetailsComplete);
  const addressComplete = useSelector(isAddressComplete);

  const [currentPage, setCurrentPage] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const [isInProgress, setIsInProgress] = React.useState(true);

  React.useEffect(() => {
    if (currentPage === 0) setIsInProgress(detailsComplete);
    else if (currentPage === 1) setIsInProgress(addressComplete);
  }, [formValues, isInProgress]);

  const navigateBack = () => {
    navigation.goBack();
    dispatch(reset());
  };

  const navigateHome = () => {
    navigation.navigate('Home', {refresh: true});
    dispatch(reset());
  };

  const submitHandler = () => {
    if (edit) dispatch(editCinema(route.params.cinemaId));
    else dispatch(createCinema(1));
  };

  if (formValues.error) {
    return (
      <SafeAreaView>
        <ErrorScreen message={error} />
      </SafeAreaView>
    );
  }

  return (
    <CinemaFormView
      currentPage={currentPage}
      isInProgress={isInProgress}
      navigateHome={navigateHome}
      setCurrentPage={setCurrentPage}
      setIsInProgress={setIsInProgress}
      setVisible={setVisible}
      submitHandler={submitHandler}
      visible={visible}
      navigateBack={navigateBack}
    />
  );
};
