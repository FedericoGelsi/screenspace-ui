import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import CinemaFormSummary from './CinemaFormSummary';
import { editValues } from '../../../mock/mockValues';
import { useDispatch } from 'react-redux';
import { loadForm } from '../../../../redux/slices/formSlice';

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" />
);

export const CinemaDetails = ({ navigation }) => {

  const dispatch = useDispatch();

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateHalls = () => {
    navigation.push('CinemaHalls');
  };

  const navigateEditCinema = () => {
    navigation.push('NewCinema');
    dispatch(loadForm(editValues));
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <TopNavigation title="ScreenSpace" alignment="center" accessoryLeft={BackAction} style={{height: '8%'}}/>
      <Divider/>
      <View style={styles.cinemaContainer}>
        <CinemaFormSummary header={'Cinema Details'} info={editValues}/>
      </View>
      <Divider/>
      <View style={styles.actionLayout}>
        <Button style={styles.buttonStyle} onPress={navigateEditCinema}>
            Edit Cinema
        </Button>
        <Button style={styles.buttonStyle} onPress={navigateHalls}>
            Halls
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    cinemaContainer: {
        top: '2%',
        height: '82%',
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    actionLayout: {
        height: '10%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
  },
    buttonStyle: {
        borderRadius: 1000,
        width: 140,
    },
  });
