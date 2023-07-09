import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Divider, Button, Avatar} from '@ui-kitten/components';
import RatingComponent from '../../RatingComponent';
import {NoData} from '../../NoData';
import {useDispatch, useSelector} from 'react-redux';
import {
  completeForm,
  newReview,
  reset,
} from '../../../../redux/slices/reviewSlice';

export const CommentsModal = ({
  isModalVisible,
  toggleModal,
  reviews,
  movieId,
}) => {
  const comments = reviews;
  const reviewForm = useSelector(state => state.review);
  const dispatch = useDispatch();

  const addCommentHandler = () => {
    dispatch(newReview(movieId));
    toggleModal(false);
    dispatch(reset());
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.commentItem}>
        <Avatar source={{uri: item.user.avatar}} />
        <View style={styles.commentView}>
          <Text style={styles.commentUser}>{item.user.username}</Text>
          <Text style={styles.commentText}>{item.comment}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.flexView}>
      <Modal
        onBackdropPress={() => toggleModal(false)}
        onBackButtonPress={() => toggleModal(false)}
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.barIcon} />
          <View style={styles.center}>
            <View style={styles.contentContainer}>
              <View style={styles.commentListContainer}>
                <Text style={styles.sectionTitle}>Comments</Text>
                {comments.length === 0 ? (
                  <View style={styles.noDataContainer}>
                    <NoData message="This movies has no comments yet" />
                  </View>
                ) : (
                  <FlatList
                    data={comments}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => (
                      <Divider style={styles.commentSeparator} />
                    )}
                    contentContainerStyle={styles.commentListContent}
                  />
                )}
              </View>

              <View style={styles.divider} />

              <View style={styles.commentForm}>
                <Text style={styles.sectionTitle}>Add your comment</Text>
                <View style={styles.ratingContainer}>
                  <RatingComponent />
                </View>
                <TextInput
                  style={styles.commentInput}
                  onChangeText={text =>
                    dispatch(completeForm({key: 'comment', value: text}))
                  }
                  placeholder="Write your comment here"
                />
              </View>

              <Button
                style={styles.addButton}
                onPress={() => addCommentHandler()}>
                Add Comment
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  flexView: {
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    paddingTop: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: '70%',
  },
  center: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  barIcon: {
    alignSelf: 'center',
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: '#bbb',
    fontSize: 24,
    marginTop: 100,
  },
  contentContainer: {
    marginTop: 10,
    width: '100%',
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  commentListContainer: {
    flex: 1,
  },
  commentListContent: {
    flexGrow: 1,
  },
  commentItem: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  commentText: {
    fontSize: 16,
  },
  commentUser: {
    fontSize: 14,
  },
  commentText: {
    fontSize: 16,
  },
  commentView: {
    alignSelf: 'center',
    flexDirection: 'column',
    marginLeft: 15,
    width: '85%',
  },
  commentSeparator: {
    marginVertical: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#CCC',
    marginVertical: 16,
  },
  commentForm: {
    marginBottom: 16,
  },
  ratingContainer: {
    // Add styles for the star rating component
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
  addButton: {
    alignSelf: 'center',
    width: '60%',
    borderRadius: 500,
  },
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 90,
    flex: 3,
  },
});
