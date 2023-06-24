import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Divider,
  Icon,
  List,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
} from '@ui-kitten/components';
import {CinemaCard} from '../../../components/CinemaCard';
import {NoData} from '../../../components/NoData';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const data = new Array(20).fill({
  title: 'Item',
});

export const HomeScreenAdmin = ({navigation}) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const navigateNewCinema = () => {
    navigation.push('NewCinema');
  };

  const navigateCinemaDetails = () => {
    navigation.push('CinemaDetails');
  };

  const navigateCinemaShows = () => {
    navigation.push('CinemaShows');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <TopNavigation
        title="ScreenSpace"
        alignment="center"
        accessoryLeft={BackAction}
        style={{height: '8%'}}
      />
      <Divider />
      <View style={styles.screenContainer}>
        {data.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text category="h6" style={styles.title}>
              {I18n.t(TEXT_KEY.cinemaHome.title)}
            </Text>
            <NoData message="You do not have any cinema yet. Start by creating a new one!" />
          </View>
        ) : (
          <View style={styles.cinemaContainer}>
            <Text category="h6" style={styles.title}>
              {I18n.t(TEXT_KEY.cinemaHome.title)}
            </Text>
            <List
              contentContainerStyle={styles.contentContainer}
              data={data}
              renderItem={() => (
                <CinemaCard navigateAction={navigateCinemaDetails} />
              )}
            />
          </View>
        )}
        <Divider />
        <View style={styles.actionLayout}>
          <Button style={styles.buttonStyle} onPress={navigateCinemaShows}>
            {I18n.t(TEXT_KEY.cinemaHome.showsButtonText)}
          </Button>
          <Button style={styles.buttonStyle} onPress={navigateNewCinema}>
            {I18n.t(TEXT_KEY.cinemaHome.newCinemaButtonText)}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cinemaContainer: {
    height: '88%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    accentBackgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  screenContainer: {
    height: '92%',
  },
  title: {
    marginTop: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  actionLayout: {
    height: '12%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 1000,
    width: 140,
  },
});
