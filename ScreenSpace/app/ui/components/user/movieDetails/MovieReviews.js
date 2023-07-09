import {Button, Icon} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import CommentsModal from './CommentsModal';

const MovieReviews = ({reviews}) => {
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
