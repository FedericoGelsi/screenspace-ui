import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { Divider, Icon, List, Layout, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import CinemaFormSummary from './CinemaFormSummary';

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" />
);

export const CinemaDetails = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateHalls = () => {
    navigation.push('CinemaHalls');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: '#FFFFFF'}}>
      <TopNavigation title="ScreenSpace" alignment="center" accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={styles.cinemaContainer}>
        <CinemaFormSummary header={'Cinema Details'}/>
      </Layout>
      <Divider/>
      <Layout style={styles.actionLayout}>
        <Button style={styles.buttonStyle}>
            Edit Cinema
        </Button>
        <Button style={styles.buttonStyle} onPress={navigateHalls}>
            Halls
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    cinemaContainer: {
        paddingTop: 30,
        height: 522,
        width: 340,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 25,
        marginBottom: 10,
        textAlign: 'center',
    },
    actionLayout: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonStyle: {
        borderRadius: 1000,
        width: 140,
    },
  });
