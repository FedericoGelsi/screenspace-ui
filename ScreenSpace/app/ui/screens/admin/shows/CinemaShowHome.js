import React from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ShowCard from '../../../components/ShowCard';
import {Button, Icon, List} from '@ui-kitten/components';

import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {NoData} from '../../../components/NoData';

const CreateNewShowButton = () => {
  return (
    <Button style={{margin: 16}} status="success" accessoryLeft={<Icon name="plus" />}>
      {I18n.t(TEXT_KEY.cinemaShows.newShowButton)}
    </Button>
  );
};

const CinemaShowHome = ({cinemaName = 'Hoyts Abasto', navigation}) => {
  const data = new Array(2).fill({
    hall: 'Item',
    movieName: 'SomeMovieName',
  });

  const renderItem = ({item, index}) => (
    <ShowCard hall={item.hall} movieName={item.movieName} />
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
      <CreateNewShowButton />
    </ViewTopNavigationContainer>
  );
};

export default CinemaShowHome;
