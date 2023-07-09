import React from 'react';
import {List, Layout, Text, Card} from '@ui-kitten/components';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet} from 'react-native';
import {NoData} from '../../../components/NoData';
import {completeForm} from '../../../../redux/slices/movieBookingSlice';

const BookingDateStep = () => {
  const formValues = useSelector(state => state.movieBooking);
  const cinemas = useSelector(state => state.userCinemas);
  const dispatch = useDispatch();
  const [showsTimes, setShowsTimes] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(
    formValues.selectedCard,
  );

  React.useEffect(() => {
    const cinema = cinemas.cinemas.find(
      cinema => cinema.id === formValues.cinemaId,
    );
    const shows = cinema.halls.flatMap(hall =>
      hall.cinemaShows.filter(
        show => show.movie.id === parseInt(formValues.movieId),
      ),
    );

    setShowsTimes(shows);
  }, []);

  const formatDate = datetime => {
    const date = new Date(datetime);
    const monthOption = {month: 'long'};

    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const weekday = weekdays[date.getDay()];
    const dayNumber = date.getDate();
    const daySuffix = calculateDaySuffix(dayNumber);
    const month = date.toLocaleDateString(undefined, monthOption);
    const year = date.getFullYear();

    return `${weekday} ${dayNumber}${daySuffix} of ${month} ${year}`;
  };

  const calculateDaySuffix = dia => {
    if (dia >= 11 && dia <= 13) {
      return 'th';
    }

    switch (dia % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const handleCardPress = (index, datetime) => {
    dispatch(completeForm({key: 'datetime', value: datetime}));
    dispatch(completeForm({key: 'selectedCard', value: index}));
    setSelectedCard(index);
  };

  const renderItem = ({item, index}) => {
    const isSelected = selectedCard === index;
    const cardStyle = [styles.item, isSelected && styles.selectedCard];
    return (
      <Card
        style={cardStyle}
        onPress={() => handleCardPress(index, item.datetime)}>
        <Text style={styles.text}>{formatDate(item.datetime)}</Text>
      </Card>
    );
  };

  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4">Pick the Date</Text>
        <Text category="s1">Select the date of the show</Text>
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

export default BookingDateStep;
