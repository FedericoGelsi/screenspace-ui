import React, {useState} from 'react';
import ViewTopNavigationContainer from '../../../components/ViewTopNavigationContainer';
import ShowCard from '../../../components/admin/shows/ShowCard';
import {Layout, List} from '@ui-kitten/components';

import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {NoData} from '../../../components/NoData';
import {CreateNewShowButton} from '../../../components/admin/shows/CreateNewShowButton';
import {DateFilter} from '../../../components/admin/shows/DateFilter';
import {useDispatch, useSelector} from 'react-redux';
import { reset } from '../../../../redux/slices/showFormSlice';

const CinemaShowHome = ({navigation, route}) => {
  const [date, setDate] = useState(new Date());
  const {cinemaId} = route?.params;
  const ownerCinemas = useSelector(state => state.ownerCinemas);
  const dispatch = useDispatch();
  const getShows = cinema =>
    cinema.halls.flatMap(o =>
      o.cinemaShows.map(e => ({
        hallId: o.id,
        hallName: o.name,
        showId: e.id,
        showName: e.name,
        movieId: e.movie.id,
        datetime: e.datetime,
        cinemaId: cinema.id,
      })),
    );

    console.log(cinemaId);
    const cinema = ownerCinemas.cinemas.find(cinema => cinema.id === cinemaId);
    console.log(cinema);
  const [shows, setShows] = useState(getShows(cinema));

  React.useEffect(() => {
    setShows(getShows(cinema));
  }, [ownerCinemas]);

  const filterShows = date => {
    return shows.filter(
      show =>
        new Date(show.datetime).toLocaleDateString() ===
        date.toLocaleDateString(),
    );
  };

  const navigateNewShow = () => {
    navigation.push('NewShow', {cinemaId: cinemaId});
    dispatch(reset());
  };

  const renderItem = ({item, index}) => (
    <ShowCard show={item} navigation={navigation} />
  );
  return (
    <ViewTopNavigationContainer
      headerTitle={I18n.t(TEXT_KEY.cinemaShows.sectionName)}
      headerSubtitle={cinema.cinemaName}
      navigation={navigation}>
      <Layout style={{flex: 1, paddingHorizontal: 16}}>
        <DateFilter date={date} setDate={setDate} onPress={filterShows} />
        {shows.length === 0 ? (
          <NoData message={I18n.t(TEXT_KEY.cinemaShows.noDataMessage)} />
        ) : (
          <List data={shows} renderItem={renderItem}></List>
        )}
        <CreateNewShowButton onPress={navigateNewShow} />
      </Layout>
    </ViewTopNavigationContainer>
  );
};

export default CinemaShowHome;
