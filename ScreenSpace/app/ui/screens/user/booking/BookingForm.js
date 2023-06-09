import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ScreenSpaceStepIndicator from '../../../components/ScreenSpaceStepIndicator';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import NewShowForm from '../../../components/admin/shows/newshowform/NewShowForm';
import {Button, Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {SuccessModal} from '../../../components/SuccessModal';
import BookingSteps from './BookingSteps';
import {getCinemasByMovie} from '../../../../redux/slices/userCinemaSlice';
import {
  completeForm,
  newUserBooking,
  reset,
} from '../../../../redux/slices/movieBookingSlice';

const BookingForm = ({navigation, route}) => {
  const movie = route?.params?.movie;
  const stepLabels = [
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.label)},
    {label: 'Date'},
    {label: 'Time'},
  ];

  const formValues = useSelector(state => state.movieBooking);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCinemasByMovie(movie.id));
    dispatch(completeForm({key: 'movieId', value: movie.id}));
  }, [dispatch]);

  const labels = stepLabels.map(step => step.label);
  const [currentPosition, setCurrentPosition] = useState(0);

  const navigateSeatsSelection = () => {
    navigation.push('SelectSeats', {movie: movie});
  };

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };

  const previousStep = () => {
    setCurrentPosition(currentPosition - 1);
  };

  const navigateHome = () => {
    navigation.navigate('UserHome');
  };

  const navigateBack = () => {
    dispatch(reset());
    navigation.goBack();
  };

  const CancelIcon = props => <Icon {...props} name="close-outline" />;

  const CancelAction = props => (
    <TopNavigationAction icon={CancelIcon} onPress={navigateBack} />
  );

  const isDisabled = () => {
    switch (currentPosition) {
      case 0:
        return formValues.cinemaId === null;
      case 1:
        return formValues.datetime === null;
      case 2:
        return formValues.showId === null;
      default:
        return true;
    }
  };

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle="Ticket Reservation"
      headerSubtitle={movie.title}
      accessoryLeft={
        currentPosition === labels.length ? (
          <TopNavigationAction />
        ) : (
          CancelAction
        )
      }>
      <Layout style={{flex: 1, padding: 16}}>
        <ScreenSpaceStepIndicator
          labels={labels}
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
        />
        <BookingSteps currentPosition={currentPosition} />
        <Layout style={{flexDirection: 'row'}}>
          {currentPosition > 0 && currentPosition !== labels.length && (
            <Button
              style={{flex: 1, marginEnd: 8}}
              appearance="ghost"
              status="danger"
              accessoryLeft={<Icon name="arrow-back" />}
              onPress={previousStep}>
              {I18n.t(TEXT_KEY.newCinemaShow.previousStepButtonLabel)}
            </Button>
          )}
          {currentPosition < labels.length - 1 && (
            <Button
              style={{flex: 1}}
              appearance="outline"
              accessoryRight={<Icon name="arrow-forward" />}
              onPress={nextStep}
              disabled={isDisabled()}>
              {I18n.t(TEXT_KEY.newCinemaShow.nextStepButtonLabel)}
            </Button>
          )}
          {currentPosition === labels.length - 1 && (
            <Button
              style={{flex: 1}}
              appearance="outline"
              accessoryRight={<Icon name="arrow-forward" />}
              onPress={navigateSeatsSelection}
              disabled={isDisabled()}>
              {I18n.t(TEXT_KEY.newCinemaShow.nextStepButtonLabel)}
            </Button>
          )}
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default BookingForm;
