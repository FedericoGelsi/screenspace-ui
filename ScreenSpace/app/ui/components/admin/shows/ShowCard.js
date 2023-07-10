import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Card, Icon, Layout, Modal, Text} from '@ui-kitten/components';

import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {useDispatch} from 'react-redux';
import {loadFormBack, removeShow} from '../../../../redux/slices/showFormSlice';

const Header = props => (
  <Layout {...props}>
    <Text category="h6">{props.movieName}</Text>
  </Layout>
);

const CardActionButton = props => {
  return (
    <Layout style={styles.buttonContainer}>
      <Button
        status="primary"
        size="small"
        accessoryLeft={<Icon name="edit-2-outline" />}
        onPress={() => props.editShow(props.show)}
      />
      <Button
        status="danger"
        size="small"
        accessoryLeft={<Icon name="trash-2-outline" />}
        onPress={() => props.setDeleteModalVisible(true)}
      />
    </Layout>
  );
};

const CardDeleteModal = props => {
  return (
    <Modal
      visible={props.deleteModalVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => props.setDeleteModalVisible(false)}>
      <Card disabled={true}>
        <Text style={{textAlign: 'center'}}>
          {I18n.t(TEXT_KEY.cinemaShows.deleteShowWarningMessage)}
        </Text>
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
            onPress={() => props.deleteShow(props.show)}
            accessoryLeft={<Icon name="trash-2-outline" />}>
            DELETE
          </Button>
        </Layout>
      </Card>
    </Modal>
  );
};

const ShowCard = ({show, navigation}) => {
  const [deleteModalVisible, setDeleteModalVisible] = React.useState(false);

  const dispatch = useDispatch();

  const handleDeleteShow = show => {
    setDeleteModalVisible(false);
    dispatch(
      removeShow({
        cinemaId: show.cinemaId,
        hallId: show.hallId,
        showId: show.showId,
      }),
    );
  };

  const editShow = show => {
    navigateEditCinema(show);
  };

  const navigateEditCinema = show => {
    navigation.push('NewShow', {edit: true, show: show});
    dispatch(loadFormBack(show));
  };

  const CardListItem = ({title, label}) => (
    <Layout>
      <Text category="label">{title}</Text>
      <Text appearance="hint" category="c1">
        {label}
      </Text>
    </Layout>
  );
  return (
    <Card style={styles.card} header={<Header movieName={show.showName} />}>
      <Layout style={{flex: 1, flexDirection: 'row'}}>
        <Layout
          style={{
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <CardListItem
            title={show.hallName}
            label={I18n.t(TEXT_KEY.cinemaShows.showCard.hallLabel)}
          />
          <CardListItem
            title={new Date(show.datetime).toLocaleString([], {
              day: '2-digit',
              month: '2-digit',
              year: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            })}
            label={I18n.t(TEXT_KEY.cinemaShows.showCard.dateTimeLabel)}
          />
        </Layout>
        <CardActionButton
          show={show}
          editShow={editShow}
          setDeleteModalVisible={setDeleteModalVisible}
        />
        <CardDeleteModal
          show={show}
          deleteShow={handleDeleteShow}
          setDeleteModalVisible={setDeleteModalVisible}
          deleteModalVisible={deleteModalVisible}
        />
      </Layout>
    </Card>
  );
};

export default ShowCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
