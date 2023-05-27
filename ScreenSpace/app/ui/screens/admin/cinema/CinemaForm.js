/* eslint-disable react-native/no-inline-styles */
import { Layout, TopNavigation, TopNavigationAction, Icon, Button, Text, Modal, Card } from '@ui-kitten/components';
import * as React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { CinemaFormDetails } from './CinemaFormDetails';
import { CinemaFormAddress } from './CinemaFormAddress';
import CinemaFormSummary from './CinemaFormSummary';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';

const PAGES = ['Page 1', 'Page 2', 'Page 3'];

const thirdIndicatorStyles = {
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
};

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" />
);

export const CinemaForm = ({navigation}) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateHome = () => {
    navigation.navigate("Home");
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <TopNavigation title="ScreenSpace" alignment="center" accessoryLeft={BackAction} />
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            stepCount={3}
            customStyles={thirdIndicatorStyles}
            currentPosition={currentPage}
            onPress={onStepPress}
            labels={['Cinema details', 'Address', 'Summary']}
          />
        </View>
        <Layout style={styles.formContainer}>
            {currentPage === 0 && <CinemaFormDetails/>}
            {currentPage === 1 && <CinemaFormAddress/>}
            {currentPage === 2 && <CinemaFormSummary header={'Summary'}/>}
        </Layout>
        <Layout style={[{justifyContent: currentPage === 0 ? 'center' : 'space-around'}, styles.actionLayout]}>
          {currentPage !== 0 && (
          <Button style={styles.buttonStyle} onPress={() => setCurrentPage(currentPage - 1)}>
              Previous
          </Button>
          )}
          {currentPage !== PAGES.length - 1 ? (
            <Button style={currentPage === 0 ? styles.oneButton : styles.buttonStyle} onPress={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          ) : (
            <Button status="success" style={currentPage === 0 ? styles.oneButton : styles.buttonStyle} onPress={() => setVisible(true)}>
              Finish
            </Button>
          )}
        </Layout>
      </View>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
      >
        <Card disabled={true} style={{width: '80%', alignSelf: 'center'}}>
          <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Your cinema was created successfully
          </Text>
          <Button status="success" onPress={() => {
            setVisible(false);
            navigateHome();
            }}>
            Home
          </Button>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 20,
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#999999',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: '#4aae4f',
  },
  actionLayout: {
    display:'flex',
    alignSelf: 'center',
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 15,
    width: 350,
  },
  buttonStyle: {
    borderRadius: 1000,
    width: 140,
  },
  formContainer: {
    height: 440,
    width: 340,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  oneButton: {
    borderRadius: 1000,
    width: 300,
  },
  scrollContainer: {
    backgroundColor: '#4c69a5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
