import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Button, Divider} from '@ui-kitten/components';
import {Text as KittenText} from '@ui-kitten/components';
import {Icon} from '@ui-kitten/components';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import {CommentsModal} from '../../components/CommentsModal';

const MovieDetails = ({navigation}) => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <ViewTopNavigationContainer
      navigation={navigation}
      headerTitle="Movie Details">
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.movieContainer}>
            <Image
              source={require('../../../assets/images/MovieTest.png')}
              style={styles.movieImage}
            />
            <View style={styles.movieInfoContainer}>
              <View style={styles.movieInfoRow}>
                <View style={styles.movieIconContainer}>
                  <Icon
                    name="film-outline"
                    fill="#1677ff"
                    style={styles.movieIcon}
                  />
                </View>
                <View style={styles.movieInfoTextContainer}>
                  <Text style={styles.movieInfoTitle}>Genre</Text>
                  <Text style={styles.movieInfoValue}>Action</Text>
                </View>
              </View>
              <View style={styles.movieInfoRow}>
                <View style={styles.movieIconContainer}>
                  <Icon
                    name="clock-outline"
                    fill="#1677ff"
                    style={styles.movieIcon}
                  />
                </View>
                <View style={styles.movieInfoTextContainer}>
                  <Text style={styles.movieInfoTitle}>Duration</Text>
                  <Text style={styles.movieInfoValue}>120 mins</Text>
                </View>
              </View>
              <View style={styles.movieInfoRow}>
                <View style={styles.movieIconContainer}>
                  <Icon
                    name="star-outline"
                    fill="#1677ff"
                    style={styles.movieIcon}
                  />
                </View>
                <View style={styles.movieInfoTextContainer}>
                  <Text style={styles.movieInfoTitle}>Rating</Text>
                  <Text style={styles.movieInfoValue}>4.5/5</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.movieTitle}>
            Everything Everywhere All at Once
          </Text>
          <Divider style={styles.divider} />
          <Text style={styles.movieSinopsis}>Sinopsis</Text>
          <Text style={styles.movieDescription}>
            A middle-aged Chinese immigrant is swept up into an insane adventure
            in which she alone can save existence by exploring other universes
            and connecting with the lives she could have led.
          </Text>
        </View>
        <View>
          <View style={styles.overlayButton}>
            <Button
              onPress={() => {
                toggleModal(true);
              }}
              style={styles.commentButton}
              appearance="outline"
              status="info"
              accessoryRight={() => (
                <Icon
                  name="message-circle"
                  fill="#1677ff"
                  style={styles.overlayIcon}
                />
              )}>
              Comments
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => {
                // Handle button press
              }}
              style={styles.button}>
              <KittenText style={styles.buttonText}>Get Reservation</KittenText>
            </Button>
          </View>
        </View>
      </ScrollView>
      <CommentsModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </ViewTopNavigationContainer>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 32,
  },
  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  movieImage: {
    width: 250,
    height: 320,
    marginRight: 8,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  movieInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: 320,
  },
  movieInfoRow: {
    alignItems: 'center',
    marginBottom: 16,
  },
  movieIconContainer: {
    marginTop: 2,
  },
  movieIcon: {
    width: 24,
    height: 24,
  },
  movieInfoTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieInfoTitle: {
    fontSize: 14,
    color: '#000',
  },
  movieInfoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  movieTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: '#000',
  },
  movieSinopsis: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 8,
    color: '#000',
  },
  movieDescription: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000',
  },
  button: {
    color: '#1677ff',
    borderRadius: 1000,
  },
  buttonText: {
    fontSize: 26,
  },
  buttonContainer: {
    bottom: 16,
    width: 0.8 * windowWidth,
    alignSelf: 'center',
  },
  divider: {
    width: 0.85 * windowWidth,
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 4,
  },
  overlayIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  overlayButton: {
    alignSelf: 'flex-end',
    bottom: 32,
  },
  commentButton: {
    height: 44,
    borderRadius: 1000,
  },
});

export default MovieDetails;
