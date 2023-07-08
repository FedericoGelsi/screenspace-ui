import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = value => {
    setRating(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.raitingText}>Raiting</Text>
      <AirbnbRating
        type="star"
        ratingCount={5}
        startingValue={rating}
        size={25}
        onFinishRating={handleRatingChange}
        showRating={false}
        style={styles.rating}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
  },
  raitingText: {
    alignSelf: 'center',
    fontSize: 18,
    marginRight: 15,
  },
});

export default RatingComponent;
