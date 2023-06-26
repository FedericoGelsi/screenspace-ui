import {
  Card,
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import {useSelector} from 'react-redux';

const NewShowSummary = () => {
  const formValues = useSelector(state => state.newShowForm);
  const moviesValues = useSelector(state => state.movies);
  const ownerCinemas = useSelector(state => state.ownerCinemas);
  const selectedMovie = moviesValues.movies.find(
    movie => movie.id === formValues.movieId,
  );

  const selectedCinema = ownerCinemas.cinemas.find(
    cinema => cinema.id === formValues.cinemaId,
  );

  const selectedHall = selectedCinema.halls.find(
    hall => hall.id === formValues.hallId,
  );

  const data = [
    {
      icon: 'film-outline',
      label: 'Movie',
      value: formValues.name,
    },
    {
      icon: 'pin-outline',
      label: 'Cinema',
      value: selectedCinema.cinemaName,
    },
    {
      icon: 'grid-outline',
      label: 'Hall',
      value: selectedHall.name,
    },
    {
      icon: 'calendar',
      label: 'Date',
      value: new Date(formValues.datetime).toLocaleDateString(),
    },
    {
      icon: 'clock-outline',
      label: 'Time',
      value: new Date(formValues.datetime).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      icon: 'film-outline',
      label: 'Duration',
      value: `${selectedMovie.duration} minutes`,
    },
  ];

  const renderItem = ({item, index}) => (
    <ListItem
      accessoryLeft={<Icon name={item.icon ? item.icon : 'info-outline'} />}
      title={item.value}
      description={item.label}
    />
  );
  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        {
          <Text category="h4" style={{textAlign: 'center'}}>
            {I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.title)}
          </Text>
        }
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.subtitle)}
        </Text>
      </Layout>
      <Card status="primary" style={{marginHorizontal: 8}}>
        <List
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
      </Card>
    </Layout>
  );
};

export default NewShowSummary;
