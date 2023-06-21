import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ShowCard from '../../../components/admin/shows/ShowCard';
import {Layout, List} from '@ui-kitten/components';

import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {NoData} from '../../../components/NoData';
import {CreateNewShowButton} from '../../../components/admin/shows/CreateNewShowButton';
import {getShows} from '../../../../api/cinemaController';
import {cinemas} from '../../../mock/mockValues';
import {DateFilter} from '../../../components/admin/shows/DateFilter';

const CinemaShowHome = ({cinema = cinemas[0], navigation}) => {
  const [date, setDate] = useState(new Date());

  const filterShows = date => {
    const shows = getShows(cinema.id);
    return shows.filter(
      show =>
        new Date(show.cinemaShow.datetime).toLocaleDateString() ===
        date.toLocaleDateString(),
    );
  };

  const data = filterShows(date);

  const navigateNewShow = () => {
    navigation.push('NewShow');
  };

  const renderItem = ({item, index}) => (
    <ShowCard show={item} navigation={navigation} />
  );
  return (
    <ViewTopNavigationContainer
      headerTitle={I18n.t(TEXT_KEY.cinemaShows.sectionName)}
      headerSubtitle={cinema.name}
      navigation={navigation}>
      {/* TODO: FILTER BY DATE */}
      <Layout style={{flex: 1, paddingHorizontal: 16}}>
        {console.log(data)}
        <DateFilter date={date} setDate={setDate} />
        {data.length === 0 ? (
          <NoData message={I18n.t(TEXT_KEY.cinemaShows.noDataMessage)} />
        ) : (
          <List data={data} renderItem={renderItem}></List>
        )}
        <CreateNewShowButton onPress={navigateNewShow} />
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default CinemaShowHome;
