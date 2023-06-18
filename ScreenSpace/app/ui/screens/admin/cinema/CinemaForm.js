/* eslint-disable react-native/no-inline-styles */
import {
  TopNavigation,
  TopNavigationAction,
  Button,
} from '@ui-kitten/components';
import * as React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {CinemaFormDetails} from './CinemaFormDetails';
import {CinemaFormAddress} from './CinemaFormAddress';
import CinemaFormSummary from './CinemaFormSummary';
import {useDispatch, useSelector} from 'react-redux';
import {
  reset,
  isDetailsComplete,
  isAddressComplete,
} from '../../../../redux/slices/formSlice';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {SuccessModal} from '../../../components/SuccessModal';
import {CustomStepIndicator} from '../../../components/CustomStepIndicator';
import {BackIcon} from '../../../kittenIcons/kittenIcons';

export const CinemaForm = ({navigation}) => {
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
    navigation.navigate('Home');
    dispatch(reset());
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TopNavigation
        title="ScreenSpace"
        alignment="center"
        accessoryLeft={BackAction}
        style={{height: '8%'}}
      />
      <View style={styles.container}>
        <CustomStepIndicator current={currentPage} />
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            {currentPage === 0 && <CinemaFormDetails />}
            {currentPage === 1 && <CinemaFormAddress />}
            {currentPage === 2 && (
              <CinemaFormSummary
                header={I18n.t(TEXT_KEY.cinemaSummary.formTitle)}
              />
            )}
          </View>
          <View
            style={[
              {justifyContent: currentPage === 0 ? 'center' : 'space-around'},
              styles.actionLayout,
            ]}>
            {currentPage !== 0 && (
              <Button
                style={styles.buttonStyle}
                onPress={() => {
                  setCurrentPage(currentPage - 1);
                  setIsInProgress(false);
                }}>
                {I18n.t(TEXT_KEY.cinemaForm.buttonPreviousText)}
              </Button>
            )}
            {currentPage !== 2 ? (
              <Button
                style={
                  currentPage === 0 ? styles.oneButton : styles.buttonStyle
                }
                disabled={isInProgress}
                onPress={() => {
                  setCurrentPage(currentPage + 1);
                  setIsInProgress(true);
                }}>
                {I18n.t(TEXT_KEY.cinemaForm.buttonNextText)}
              </Button>
            ) : (
              <Button
                status="success"
                style={
                  currentPage === 0 ? styles.oneButton : styles.buttonStyle
                }
                onPress={() => {
                  setVisible(true);
                }}>
                {I18n.t(TEXT_KEY.cinemaForm.buttonFinishText)}
              </Button>
            )}
          </View>
        </View>
      </View>
      {visible && (
        <SuccessModal
          text={I18n.t(TEXT_KEY.cinemaForm.successModalMessage)}
          buttonText={I18n.t(TEXT_KEY.cinemaForm.successModalButtonMessage)}
          action={navigateHome}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    height: '100%',
  },
  container: {
    flex: 1,
    height: '92%',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    height: '90%',
  },
  actionLayout: {
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '14%',
    width: '90%',
  },
  buttonStyle: {
    borderRadius: 1000,
    width: 140,
  },
  formContainer: {
    height: '86%',
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  oneButton: {
    borderRadius: 1000,
    width: 300,
  },
});
