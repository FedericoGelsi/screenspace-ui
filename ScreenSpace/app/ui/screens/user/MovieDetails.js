import React from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Button, Divider, Layout, Text} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import InfoColumn from '../../components/user/movieDetails/InfoColumn';
import I18n from '../../../assets/strings/I18n';
import TEXT_KEY from '../../../assets/strings/TextKey';
import ShareContent from '../../components/ShareContent';
import MovieReviews from '../../components/user/movieDetails/MovieReviews';

const MovieDetails = ({navigation, route}) => {
  const {movie} = route.params;

  const navigateBooking = () => {
    // navigation.push('', {movie: movie});
  };

  const accessoryRight = () => {
    return <ShareContent movieTitle={movie.title} />;
  };
  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle={I18n.t(TEXT_KEY.movieDetails.sectionName)}
      headerSubtitle={movie.title}
      accessoryRight={accessoryRight}>
      <Layout style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.movieContainer}>
            <Image
              source={{uri: movie.imageUrl}}
              style={styles.movieImage}
              resizeMode="cover"
            />
            <InfoColumn movie={movie} />
          </View>
          <View style={{flex: 3, alignContent: 'flex-start', marginTop: 8}}>
            <Text category="h5">{movie.title}</Text>
            <Divider style={styles.divider} />
            <Text category="h6">
              {I18n.t(TEXT_KEY.movieDetails.synopsisLabel)}
            </Text>
            <ScrollView>
              <Text style={{textAlign: 'justify'}}>{movie.synopsis}</Text>
            </ScrollView>
          </View>
        </View>
        <MovieReviews reviews={movie.reviews} />
        <Button onPress={navigateBooking} style={styles.button}>
          Get Reservation
        </Button>
      </Layout>
    </ViewTopNavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  movieContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  movieImage: {
    flex: 4,
    marginHorizontal:16,
    aspectRatio: 2 / 3,
    borderRadius: 16,
  },
  button: {
    borderRadius: 1000,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 4,
  },
});

export default MovieDetails;
