import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {
  Divider,
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
import {BackIcon} from '../../../kittenIcons/kittenIcons';

const data = new Array(2).fill({
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
      <Divider />
      <View style={styles.screenContainer}>
        {data.length === 0 ? (
          <View style={styles.noDataContainer}>
            <Text category="h6" style={styles.title}>
              {I18n.t(TEXT_KEY.cinemaHome.title)}
            </Text>
            <NoData message={I18n.t(TEXT_KEY.cinemaHome.noDataText)} />
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
          <Button style={styles.buttonStyle}>
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
  safeAreaContainer: {
    height: '100%',
  },
  screenContainer: {
    height: '92%',
    backgroundColor: '#FFFFFF',
  },
  cinemaContainer: {
    height: '88%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    accentBackgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
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
