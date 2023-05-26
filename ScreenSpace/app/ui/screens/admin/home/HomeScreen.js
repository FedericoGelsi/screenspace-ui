import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { Divider, Icon, List, Layout, Text, TopNavigation, TopNavigationAction, Button } from '@ui-kitten/components';
import { CinemaCard } from '../../../components/CinemaCard';
import { NoData } from '../../../components/NoData';

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" />
);

const data = new Array(9).fill({
    title: 'Item',
  });

export const HomeScreenAdmin = ({ navigation }) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateNewCinema = () => {
    navigation.push('NewCinema');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: '#FFFFFF'}}>
      <TopNavigation title="ScreenSpace" alignment="center" accessoryLeft={BackAction}/>
      <Divider/>
      {data.length === 0 ? (
        <Layout style={styles.noDataContainer}>
          <Text category="h6" style={styles.title}>
            Your Cinemas
          </Text>
          <NoData message='You do not have any cinema yet. Start by creating a new one!'/>
        </Layout>
      ) : (
      <Layout style={styles.cinemaContainer}>
        <Text category="h6" style={styles.title}>
            Your Cinemas
        </Text>
        <List
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={CinemaCard}
        />
      </Layout>
      )}
      <Divider/>
      <Layout style={styles.actionLayout}>
        <Button style={styles.buttonStyle}>
            Shows
        </Button>
        <Button style={styles.buttonStyle} onPress={navigateNewCinema}>
            New Cinema
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    cinemaContainer: {
      height: 522,
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    noDataContainer: {
      display: 'flex',
      height: 522,
      backgroundColor: '#FFFFFF',
    },
    contentContainer: {
      backgroundColor: '#FFFFFF',
      accentBackgroundColor: '#FFFFFF',
      paddingHorizontal: 30,
      paddingVertical: 20,
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
