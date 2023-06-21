import React from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ShowCard from '../../../components/admin/shows/ShowCard';
import {List} from '@ui-kitten/components';

import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {NoData} from '../../../components/NoData';
import { CreateNewShowButton } from '../../../components/admin/shows/CreateNewShowButton';

const CinemaShowHome = ({cinemaName = 'Hoyts Abasto', navigation}) => {
  const data = new Array(20).fill({
    id: Math.random().toString(16).slice(2),
    hall: 'Main Hall - 22:00',
    movieName: 'Star Wars: Episode IX'
  });

  const navigateNewShow = () => {
    navigation.push('NewShow');
  };

  const renderItem = ({item, index}) => (
    <ShowCard show={item}/>
  );
  return (
    <ViewTopNavigationContainer
      headerTitle={I18n.t(TEXT_KEY.cinemaShows.sectionName)}
      headerSubtitle={cinemaName}
      navigation={navigation}>
      {data.length === 0 ? (
        <NoData message={I18n.t(TEXT_KEY.cinemaShows.noDataMessage)} />
      ) : (
        <List
          style={{paddingHorizontal: 16}}
          data={data}
          renderItem={renderItem}></List>
      )}
      <CreateNewShowButton onPress={navigateNewShow} />
    </ViewTopNavigationContainer>
  );
};

export default CinemaShowHome;
