import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ScreenSpaceStepIndicator from '../../../components/ScreenSpaceStepIndicator';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import NewShowForm from '../../../components/admin/shows/newshowform/NewShowForm';
import {Button, Icon, Layout, TopNavigationAction} from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux';
import { reset } from '../../../../redux/slices/showFormSlice';

const NewShowView = ({navigation, route}) => {
  const stepLabels = [
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.label)},
  ];
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();

  const labels = stepLabels.map(step => step.label);
  const [currentPosition, setCurrentPosition] = useState(0);

  const nextStep = () => {
    setCurrentPosition(currentPosition + 1);
  };

  const previousStep = () => {
    setCurrentPosition(currentPosition - 1);
  };

  const navigateCinemaShows = () => navigation.navigate('CinemaShows');

  const navigateBack = () => {
    dispatch(reset());
    navigation.goBack();
  };

  console.log(formValues);
  const CancelIcon = props => <Icon {...props} name="close-outline" />;

  const CancelAction = props => (
    <TopNavigationAction icon={CancelIcon} onPress={navigateBack} />
  );

  const isDisabled = () => {
    switch (currentPosition) {
      case 0:
        return formValues.cinemaId === null
      case 1:
        return formValues.hallId === null
      case 2:
        return formValues.movieId === null
      case 3:
        return formValues.datetime === null
      default:
        return true;
    }
  }

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={I18n.t(
        route
          ? TEXT_KEY.newCinemaShow.sectionName
          : TEXT_KEY.newCinemaShow.editSectionName,
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
        <NewShowForm currentPosition={currentPosition} />
        <Layout style={{flexDirection: 'row'}}>
          {currentPosition > 0 && currentPosition !== labels.length - 1 && (
            <Button
              style={{flex: 1, marginEnd: 8}}
              appearance="ghost"
              status="danger"
              accessoryLeft={<Icon name="arrow-back" />}
              onPress={previousStep}>
              {I18n.t(TEXT_KEY.newCinemaShow.previousStepButtonLabel)}
            </Button>
          )}
          {currentPosition < labels.length - 2 && (
            <Button
              style={{flex: 1}}
              appearance="outline"
              accessoryRight={<Icon name="arrow-forward" />}
              onPress={nextStep}
              disabled={isDisabled()}
              >
              {I18n.t(TEXT_KEY.newCinemaShow.nextStepButtonLabel)}
            </Button>
          )}
          {currentPosition === labels.length - 2 && (
            <Button
              style={{flex: 1}}
              status="success"
              accessoryRight={<Icon name="checkmark" />}
              onPress={nextStep}
              // TODO: Add validation
              disabled={true}>
              {I18n.t(TEXT_KEY.newCinemaShow.submitButtonLabel)}
            </Button>
          )}
          {currentPosition === labels.length - 1 && (
            <Button
              style={{flex: 1}}
              appearance="ghost"
              status="danger"
              onPress={navigateCinemaShows}>
              {I18n.t(TEXT_KEY.newCinemaShow.finishButtonLabel)}
            </Button>
          )}
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default NewShowView;
