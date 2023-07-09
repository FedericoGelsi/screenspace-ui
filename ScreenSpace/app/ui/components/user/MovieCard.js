import {Text} from '@ui-kitten/components';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import BackgroundGradient from '../BackgroundGradient';

const MovieCard = ({style, navigation, item}) => {
  const navigateMovieDetails = () => {
    navigation.push('MovieDetails', {movie: item});
  };

  const TO_COLOR = '#000000';
  const FROM_COLOR = '#FFFFFF';

  return (
    <View style={style}>
      <TouchableHighlight
        style={styles.imageStyle}
        onPress={navigateMovieDetails}>
        <ImageBackground
          style={[styles.imageStyle]}
          imageStyle={styles.imageStyle}
          source={{uri: item.imageUrl}}>
          <BackgroundGradient
            fromColor={FROM_COLOR}
            toColor={TO_COLOR}
            radius={16}
          />
          <View style={[styles.container, styles.imageStyle]}>
            <Text category="h6" style={styles.text}>
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  imageStyle: {
    aspectRatio: 2 / 3,
    borderRadius: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
    overflow: 'hidden',
  },
});
