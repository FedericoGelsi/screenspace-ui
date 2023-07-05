import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Icon} from '@ui-kitten/components';

const MovieDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.movieContainer}>
        <Image
          source={require('../../../assets/images/MovieTest.png')}
          style={styles.movieImage}
        />
        <View style={styles.movieInfoContainer}>
          <View style={styles.movieInfoRow}>
            <View style={styles.movieIconContainer}>
              <Icon name="film-outline" fill="#000" style={styles.movieIcon} />
            </View>
            <View style={styles.movieInfoTextContainer}>
              <Text style={styles.movieInfoTitle}>Genre</Text>
              <Text style={styles.movieInfoValue}>Action</Text>
            </View>
          </View>
          <View style={styles.movieInfoRow}>
            <View style={styles.movieIconContainer}>
              <Icon name="clock-outline" fill="#000" style={styles.movieIcon} />
            </View>
            <View style={styles.movieInfoTextContainer}>
              <Text style={styles.movieInfoTitle}>Duration</Text>
              <Text style={styles.movieInfoValue}>120 mins</Text>
            </View>
          </View>
          <View style={styles.movieInfoRow}>
            <View style={styles.movieIconContainer}>
              <Icon name="star-outline" fill="#000" style={styles.movieIcon} />
            </View>
            <View style={styles.movieInfoTextContainer}>
              <Text style={styles.movieInfoTitle}>Rating</Text>
              <Text style={styles.movieInfoValue}>4.5/5</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.movieTitle}>Movie Title</Text>
      <Text style={styles.movieDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
        libero a massa mattis, in tincidunt felis efficitur. Fusce ut sapien
        quis ligula fringilla viverra in nec tortor.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 32,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  movieImage: {
    width: 200,
    height: 300,
    marginRight: 16,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  movieInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 300,
  },
  movieInfoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  movieIconContainer: {
    marginTop: 2,
    marginRight: 8,
  },
  movieIcon: {
    width: 24,
    height: 24,
  },
  movieInfoTextContainer: {
    flex: 1,
  },
  movieInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieInfoValue: {
    fontSize: 18,
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  movieDescription: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MovieDetails;
