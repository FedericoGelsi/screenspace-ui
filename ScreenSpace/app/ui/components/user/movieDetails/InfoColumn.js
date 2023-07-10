import React from 'react';
import {StyleSheet, View} from 'react-native';
import InfoItem from './InfoItem';
import MovieReviews from './MovieReviews';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const InfoColumn = ({movie}) => {
  const genres = movie.genres.flatMap(o => o.genre);

  const reviewAverage = () => {
    const ratings = movie.reviews.map(review => review.rating);
    const totalRatings = ratings.length;
    if (totalRatings === 0) return 'Not Rated';
    const sumRatings = ratings.reduce((total, rating) => total + rating, 0);
    const averageRating = sumRatings / totalRatings;

    let raitingFinal = averageRating.toFixed(1);
    if (Number.isInteger(parseFloat(raitingFinal))) {
      raitingFinal = parseInt(raitingFinal);
    }
    return `${raitingFinal}/5`;
  };

  const data = [
    {
      label: I18n.t(TEXT_KEY.movieDetails.infoColumn.genreLabel),
      value: genres.join(', '),
      icon: 'film-outline',
    },
    {
      label: I18n.t(TEXT_KEY.movieDetails.infoColumn.durationLabel),
      value: `${movie.duration} minutes`,
      icon: 'clock-outline',
    },
    {
      label: I18n.t(TEXT_KEY.movieDetails.infoColumn.ratingLabel),
      value: reviewAverage(),
      icon: 'star-outline',
    },
  ];

  const renderItem = (item, index) => <InfoItem key={index} item={item} />;
  return (
    <View style={styles.movieInfoContainer}>
      {data.map((item, index) => renderItem(item, index))}
      {/* <MovieReviews reviews={movie.reviews} /> */}
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
