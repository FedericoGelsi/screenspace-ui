import React from 'react';
import {StyleSheet, View} from 'react-native';
import InfoItem from './InfoItem';

const InfoColumn = ({movie}) => {

  const genres = movie.genres.flatMap(o => o.genre);

  const data = [
    {
      label: 'Genre',
      value: genres.join(", "),
      icon: 'film-outline',
    },
    {
      label: 'Duration',
      value: `${movie.duration} minutes`,
      icon: 'clock-outline',
    },
    {
      label: 'Rating',
      value: movie.rating,
      icon: 'star-outline',
    },
  ];

  const renderItem = (item, index) => <InfoItem key={index} item={item} />;
  return (
    <View style={styles.movieInfoContainer}>
      {data.map((item, index) => renderItem(item, index))}
    </View>
  );
};

export default InfoColumn;

const styles = StyleSheet.create({
  movieInfoContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
