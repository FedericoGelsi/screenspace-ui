import {Button, Icon, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CommentsModal} from './CommentsModal';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const MovieReviews = ({reviews, movieId}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonContainer}
        appearance="outline"
        onPress={() => {
          toggleModal(true);
        }}
        accessoryRight={<Icon name="message-circle-outline" />}>
        {I18n.t(TEXT_KEY.movieDetails.infoColumn.reviewsLabel)}
      </Button>
      <CommentsModal
        reviews={reviews}
        movieId={movieId}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </View>
  );
};

export default MovieReviews;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    borderRadius: 1000,
  },
});
