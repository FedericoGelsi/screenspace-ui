import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ScreenSpaceStepIndicator from '../../../components/ScreenSpaceStepIndicator';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import NewShowForm from '../../../components/admin/shows/newshowform/NewShowForm';
import {Button, Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import {
  completeForm,
  createShow,
  editShow,
} from '../../../../redux/slices/showFormSlice';
import {SuccessModal} from '../../../components/SuccessModal';
import EditShowForm from '../../../components/admin/shows/newshowform/EditShowForm';

const ShowView = ({navigation, route}) => {
  let edit = route?.params?.edit ? route.params.edit : false;
  const stepLabels = [
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.label)},
  ];

  const stepEditLabels = [
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.label)},
  ];
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();

  if (!edit) {
    dispatch(
      completeForm({
        key: 'cinemaId',
        value: route?.params?.cinemaId,
      }),
    );
  }
  const labels = edit
    ? stepEditLabels.map(step => step.label)
    : stepLabels.map(step => step.label);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [visible, setVisible] = React.useState(false);

  const submitHandler = () => {
    if (edit) {
      dispatch(editShow());
    } else dispatch(createShow());
    setVisible(true);
  };

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };

  const previousStep = () => {
    setCurrentPosition(currentPosition - 1);
  };

  const navigateHome = () => {
    navigation.navigate('CinemaShows', {cinemaId: formValues.cinemaId});
  };

  const navigateBack = () => {
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
        return formValues.hallId === null;
      case 2:
        return formValues.movieId === null;
      case 3:
        return formValues.datetime === null;
      default:
        return true;
    }
  };

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={I18n.t(
        edit
          ? TEXT_KEY.newCinemaShow.editSectionName
          : TEXT_KEY.newCinemaShow.sectionName,
      )}
      accessoryLeft={
        currentPosition === labels.length - 1 ? (
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
        {edit ? (
          <EditShowForm currentPosition={currentPosition} />
        ) : (
          <NewShowForm currentPosition={currentPosition} />
        )}
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
              status="success"
              accessoryRight={<Icon name="checkmark" />}
              onPress={submitHandler}>
              {I18n.t(TEXT_KEY.newCinemaShow.submitButtonLabel)}
            </Button>
          )}
          {visible && (
            <SuccessModal
              text={I18n.t(TEXT_KEY.cinemaForm.successModalMessage)}
              buttonText={I18n.t(TEXT_KEY.cinemaForm.successModalButtonMessage)}
              action={navigateHome}
              isProcessing={formValues.isProcessing}
            />
          )}
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default ShowView;
