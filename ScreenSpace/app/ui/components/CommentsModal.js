import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Divider, Button} from '@ui-kitten/components';

const windowHeight = Dimensions.get('window').height;

const CommentsModal = ({bottomSheetRef, openBottomSheet, closeBottomSheet}) => {
  const comments = [
    {id: 1, text: 'Comment 1'},
    {id: 2, text: 'Comment 2'},
    {id: 3, text: 'Comment 3'},
    {id: 4, text: 'Comment 4'},
    {id: 5, text: 'Comment 5'},
    {id: 6, text: 'Comment 6'},
    // Add more comments as needed
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.commentItem}>
        <Text style={styles.commentText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RBSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: styles.bottomSheetContainer,
          wrapper: styles.bottomSheetWrapper,
          draggableIcon: styles.draggableIcon,
        }}>
        <View style={styles.contentContainer}>
          <View style={styles.commentListContainer}>
            <Text style={styles.sectionTitle}>Comments</Text>
            <FlatList
              data={comments}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={() => (
                <Divider style={styles.commentSeparator} />
              )}
              contentContainerStyle={styles.commentListContent}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.commentForm}>
            <Text style={styles.sectionTitle}>Add your comment</Text>
            <View style={styles.ratingContainer}>
              {/* Add your star rating component */}
            </View>
            <TextInput style={styles.commentInput} placeholder="Your comment" />
          </View>

          <Button style={styles.addButton} onPress={() => {}}>
            Add Comment
          </Button>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 24,
    height: '50%',
  },
  bottomSheetWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'stretch',
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
    paddingVertical: 8,
  },
  commentText: {
    fontSize: 16,
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
  },
});

export default CommentsModal;
