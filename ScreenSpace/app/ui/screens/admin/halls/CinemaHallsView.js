import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Divider,
  List,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Button,
  Modal,
  Card,
  RadioGroup,
  Radio,
  Input,
} from '@ui-kitten/components';
import {NoData} from '../../../components/NoData';
import {HallCard} from '../../../components/HallCard';
import {HallHeader} from '../../../components/HallHeader';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {BackIcon} from '../../../kittenIcons/kittenIcons';
import {Stepper} from '../../../components/Stepper';
import {CustomSpinner} from '../../../components/CustomSpinner';
import {ConfirmationModal} from '../../../components/ConfirmationModal';

export const CinemaHallsView = ({
  navigateBack,
  data,
  hallValues,
  handleModal,
  handleEdit,
  handleRemove,
  addHallVisible,
  dispatch,
  reset,
  edit,
  setEdit,
  completeHall,
  isHallComplete,
  handleSubmit,
  modalVisible,
  handleCancel,
  handleConfirm,
}) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <TopNavigation
        title={I18n.t(TEXT_KEY.appName)}
        alignment="center"
        accessoryLeft={BackAction}
        style={{height: '8%'}}
      />
      <Divider />
      {hallValues.isLoading && <CustomSpinner />}
      {data.length === 0 ? (
        <Layout style={styles.noDataContainer}>
          <HallHeader handleModal={handleModal} />
          <NoData message={I18n.t(TEXT_KEY.cinemaHalls.noDataText)} />
        </Layout>
      ) : (
        <Layout style={styles.hallContainer}>
          <HallHeader handleModal={handleModal} />
          <List
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={item => (
              <HallCard
                editHandler={handleEdit}
                removeHandler={handleRemove}
                item={item}
              />
            )}
          />
        </Layout>
      )}
      <Divider />
      <Layout style={styles.actionLayout}>
        <Button
          status="success"
          style={styles.oneButton}
          onPress={() => navigateBack()}>
          {I18n.t(TEXT_KEY.cinemaHalls.finishButtonText)}
        </Button>
      </Layout>
      <Modal
        visible={addHallVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => {
          handleModal(false);
          dispatch(reset());
          if (edit) setEdit(false);
        }}
        style={styles.modal}>
        <Card disabled={true}>
          <Layout style={styles.radioContainer}>
            <Text category="s1" style={{marginRight: 8}}>
              {I18n.t(TEXT_KEY.cinemaHalls.form.name)}
            </Text>
            <Input
              placeholder="Hall name"
              value={hallValues.hallName}
              onChangeText={text =>
                dispatch(completeHall({key: 'hallName', value: text}))
              }
              style={styles.formCtrl}
              maxLength={25}
            />
          </Layout>
          <Divider style={styles.divider} />
          <Stepper
            title={I18n.t(TEXT_KEY.cinemaHalls.form.numberOfLinesText)}
            hallKey={'numberOfLines'}
          />
          <Divider style={styles.divider} />
          <Stepper
            title={I18n.t(TEXT_KEY.cinemaHalls.form.numberOfSeatsText)}
            hallKey={'numberOfSeats'}
          />
          <Divider style={styles.divider} />
          <Layout style={styles.radioContainer}>
            <Text category="s1" style={{marginRight: 8}}>
              {I18n.t(TEXT_KEY.cinemaHalls.form.status)}
            </Text>
            <RadioGroup
              selectedIndex={hallValues.active}
              onChange={index =>
                dispatch(completeHall({key: 'active', value: index}))
              }
              style={styles.radioButtonContainer}>
              <Radio>{I18n.t(TEXT_KEY.cinemaHalls.form.inactiveText)}</Radio>
              <Radio>{I18n.t(TEXT_KEY.cinemaHalls.form.activeText)}</Radio>
            </RadioGroup>
          </Layout>
          <Divider style={styles.divider} />
          <Button
            disabled={isHallComplete}
            status="success"
            onPress={() => {
              handleModal(false);
              handleSubmit();
            }}>
            {I18n.t(TEXT_KEY.cinemaHalls.form.saveButtonText)}
          </Button>
        </Card>
      </Modal>
      <ConfirmationModal
        visible={modalVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hallContainer: {
    height: '82%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  noDataContainer: {
    height: '82%',
    display: 'flex',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
  },
  actionLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    height: '10%',
  },
  oneButton: {
    borderRadius: 1000,
    width: 300,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '3%',
    left: '4%',
    width: '90%',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    width: '90%',
  },
  divider: {
    marginTop: '1%',
    marginBottom: '3%',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: '2%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  formCtrl: {
    flexGrow: 1,
  },
});
