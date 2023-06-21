import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ScreenSpaceStepIndicator from '../../../components/ScreenSpaceStepIndicator';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import NewShowForm from '../../../components/admin/shows/newshowform/NewShowForm';
import {Button, Icon, Layout} from '@ui-kitten/components';

const NewShowView = ({navigation}) => {
  const stepLabels = [
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.label)},
    {label: I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.label)},
  ];
  const labels = stepLabels.map(step => step.label);
  const [currentPosition, setCurrentPosition] = useState(0);

  const nextStep = () => {
    console.log(currentPosition);
    setCurrentPosition(currentPosition + 1);
  };

  const previousStep = () => {
    console.log(currentPosition);
    setCurrentPosition(currentPosition - 1);
  };

  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={I18n.t(TEXT_KEY.newCinemaShow.sectionName)}>
      <Layout style={{flex: 1, padding: 16}}>
        <ScreenSpaceStepIndicator
          labels={labels}
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
        />
        <NewShowForm currentPosition={currentPosition} />
        <Layout style={{flexDirection: 'row'}}>
          {currentPosition > 0 && (
            <Button
              style={{flex: 1, marginEnd: 8}}
              appearance="ghost"
              status="danger"
              accessoryLeft={<Icon name="arrow-back" />}
              onPress={previousStep}>
              {I18n.t(TEXT_KEY.newCinemaShow.previousStepButtonLabel)}
            </Button>
          )}
          {currentPosition < labels.length-1 && (
            <Button
              style={{flex: 1}}
              appearance="outline"
              accessoryRight={<Icon name="arrow-forward" />}
              onPress={nextStep}>
              {I18n.t(TEXT_KEY.newCinemaShow.nextStepButtonLabel)}
            </Button>
          )}
          {currentPosition === labels.length-1 && (
            <Button
              style={{flex: 1}}
              status="success"
              accessoryRight={<Icon name="checkmark" />}
              onPress={nextStep}>
              {I18n.t(TEXT_KEY.newCinemaShow.submitButtonLabel)}
            </Button>
          )}
        </Layout>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default NewShowView;