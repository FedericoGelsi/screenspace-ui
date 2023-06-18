import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Icon, Layout, Modal, Text} from '@ui-kitten/components';

import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

const Header = props => (
  <Layout {...props}>
    <Text category="h6">{props.movieName}</Text>
  </Layout>
);

const CardActionButton = () => {
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  return (
    <Layout style={styles.buttonContainer}>
      <Button
        status="primary"
        style={styles.footerControl}
        size="small"
        accessoryLeft={<Icon name="edit-2-outline" />}
      />
      <Button
        status="danger"
        style={styles.footerControl}
        size="small"
        accessoryLeft={<Icon name="trash-2-outline" />}
        onPress={() => setDeleteModalVisible(true)}
      />
      <Modal
        visible={deleteModalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setDeleteModalVisible(false)}>
        <Card disabled={true}>
          <Text style={{textAlign:"center"}}>{I18n.t(TEXT_KEY.cinemaShows.deleteShowWarningMessage)}</Text>
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 16,
            }}>
            <Button
              style={styles.footerControl}
              status="basic"
              onPress={() => setDeleteModalVisible(false)}>
              CANCEL
            </Button>
            <Button
              style={styles.footerControl}
              status="danger"
              onPress={() => setDeleteModalVisible(false)}
              accessoryLeft={<Icon name="trash-2-outline" />}>
              DELETE
            </Button>
          </Layout>
        </Card>
      </Modal>
    </Layout>
  );
};

const ShowCard = ({hall, movieName}) => {
  return (
    <Card style={styles.card} header={<Header movieName={movieName} />}>
      <Layout style={styles.footerContainer}>
        <Text>{hall}</Text>
        <CardActionButton />
      </Layout>
    </Card>
  );
};

export default ShowCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
