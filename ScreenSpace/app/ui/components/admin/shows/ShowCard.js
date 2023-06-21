import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Icon, Layout, Modal, Text} from '@ui-kitten/components';

import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const Header = props => (
  <Layout {...props}>
    <Text category="h6">{props.movieName}</Text>
  </Layout>
);


const CardActionButton = (props) => {
  return (
    <Layout style={styles.buttonContainer}>
      <Button
        status="primary"
        style={styles.footerControl}
        size="small"
        accessoryLeft={<Icon name="edit-2-outline" />}
        onPress={() => props.editShow(props.show.id)}
      />
      <Button
        status="danger"
        style={styles.footerControl}
        size="small"
        accessoryLeft={<Icon name="trash-2-outline" />}
        onPress={() => props.setDeleteModalVisible(true)}
      />
    </Layout>
  );
};

const CardDeleteModal = (props) =>{
  return (
    <Modal
        visible={props.deleteModalVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => props.setDeleteModalVisible(false)}>
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
              onPress={() => props.setDeleteModalVisible(false)}>
              CANCEL
            </Button>
            <Button
              style={styles.footerControl}
              status="danger"
              onPress={() => props.deleteShow(props.show.id)}
              accessoryLeft={<Icon name="trash-2-outline" />}>
              DELETE
            </Button>
          </Layout>
        </Card>
      </Modal>
  )
}

const ShowCard = ({show}) => {
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  const deleteShow = (showId) => {
    setDeleteModalVisible(false)
    console.info("Delete show: ", showId);
    //TODO: Add logic to remove show
  }
  
  const editShow = (showId) => {
    console.info("Edit show:", showId);
    //TODO: Add logic to edit show
  }

  return (
    <Card style={styles.card} header={<Header movieName={show.movieName} />}>
      <Layout style={styles.footerContainer}>
        <Text>{show.hall}</Text>
        <CardActionButton show={show} editShow={editShow} setDeleteModalVisible={setDeleteModalVisible} />
        <CardDeleteModal show={show} deleteShow={deleteShow} setDeleteModalVisible={setDeleteModalVisible} deleteModalVisible={deleteModalVisible} />
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
