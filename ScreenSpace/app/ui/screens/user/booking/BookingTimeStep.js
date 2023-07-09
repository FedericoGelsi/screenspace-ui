import React from 'react';
import {List, Layout, Text, Card} from '@ui-kitten/components';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet} from 'react-native';
import {NoData} from '../../../components/NoData';
import {completeForm} from '../../../../redux/slices/movieBookingSlice';

const BookingTimeStep = () => {
  const formValues = useSelector(state => state.movieBooking);
  const cinemas = useSelector(state => state.userCinemas);
  const dispatch = useDispatch();
  const [showsTimes, setShowsTimes] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    const cinema = cinemas.cinemas.find(
      cinema => cinema.id === formValues.cinemaId,
    );
    const shows = cinema.halls.flatMap(hall =>
      hall.cinemaShows.filter(
        show => show.movie.id === parseInt(formValues.movieId),
      ),
    );

    const cinemaShowsByDate = shows.filter(show => {
      const showDate = new Date(show.datetime);
      const date = new Date(formValues.datetime);
      return (
        showDate.getDate() === date.getDate() &&
        showDate.getMonth() === date.getMonth() &&
        showDate.getFullYear() === date.getFullYear()
      );
    });

    setShowsTimes(cinemaShowsByDate);
  }, []);

  const extractTime = datetime => {
    const date = new Date(datetime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${hours}:${formattedMinutes}`;
  };

  const handleCardPress = (index, showId) => {
    dispatch(completeForm({key: 'showId', value: showId}));
    setSelectedCard(index);
  };

  const renderItem = ({item, index}) => {
    const isSelected = selectedCard === index;
    const cardStyle = [styles.item, isSelected && styles.selectedCard];
    return (
      <Card style={cardStyle} onPress={() => handleCardPress(index, item.id)}>
        <Text style={styles.text}>{extractTime(item.datetime)}</Text>
      </Card>
    );
  };

  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4">Pick Your Show</Text>
        <Text category="s1">Select the time of the show</Text>
      </Layout>
      {showsTimes.length !== 0 ? (
        <Layout style={{marginVertical: 16, alignItems: 'center'}}>
          <List
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            data={showsTimes}
            renderItem={renderItem}
          />
        </Layout>
      ) : (
        <Layout style={styles.noDataContainer}>
          <NoData message="We are sorry. No shows available for the date selected." />
        </Layout>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    width: '90%',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingHorizontal: 8,
  },
  item: {
    marginBottom: 4,
  },
  text: {
    fontWeight: 'bold',
  },
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: 'blue',
  },
});

export default BookingTimeStep;
