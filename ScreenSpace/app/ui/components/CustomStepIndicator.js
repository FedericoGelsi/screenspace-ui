import React from "react";
import { StyleSheet, View } from "react-native";
import StepIndicator from 'react-native-step-indicator';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

export const CustomStepIndicator = ({ current }) => {

    const stepLabels = [
        { label: I18n.t(TEXT_KEY.cinemaForm.stepIndicator.firstStep) },
        { label: I18n.t(TEXT_KEY.cinemaForm.stepIndicator.secondStep) },
        { label: I18n.t(TEXT_KEY.cinemaForm.stepIndicator.thirdStep) },
      ];

    return (
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={3}
            customStyles={styles.indicatorStyle}
            currentPosition={current}
            labels={stepLabels.map((step) => step.label)}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    stepIndicator: {
        top: '2%',
        height: '10%',
    },
    indicatorStyle: {
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
        labelSize: 13,
        currentStepLabelColor: '#999999',
    },
});