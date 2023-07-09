import StepIndicator from 'react-native-step-indicator';
import { Layout } from '@ui-kitten/components';

const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize: 15,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#1677ff',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#1677ff',
  stepStrokeUnFinishedColor: '#dedede',
  separatorFinishedColor: '#1677ff',
  separatorUnFinishedColor: '#dedede',
  stepIndicatorFinishedColor: '#1677ff',
  stepIndicatorUnFinishedColor: '#dedede',
  stepIndicatorCurrentColor: '#1677ff',
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: '#999999',
  labelSize: 14,
  currentStepLabelColor: '#1677ff',
};

const ScreenSpaceStepIndicator = ({labels, currentPosition, setCurrentPosition}) => {

  const onStepPress = position => {
    setCurrentPosition(position);
  };

  return (
    <Layout style={{paddingVertical:16}}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        onPress={onStepPress}
        stepCount={labels.length}
      />
    </Layout>
  );
};

export default ScreenSpaceStepIndicator;
