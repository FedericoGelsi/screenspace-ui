import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  completeHall,
  reset,
  isComplete,
  createHall,
  loadHallFromBack,
  editHall,
  removeHall,
} from '../../../../redux/slices/hallSlice';
import ErrorScreen from '../../../components/ErrorScreen';
import {CinemaHallsView} from './CinemaHallsView';

export const CinemaHalls = ({navigation, route}) => {
  const {halls} = useSelector(state => state.hall);
  const hallValues = useSelector(state => state.hall);
  const dispatch = useDispatch();
  const hallComplete = useSelector(isComplete);

  const [addHallVisible, setAddHallVisible] = React.useState(false);
  const [isHallComplete, setIsHallComplete] = React.useState(true);
  const [data, setData] = React.useState(halls);
  const [edit, setEdit] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [hallIndex, setHallIndex] = React.useState(0);

  const handleConfirm = () => {
    dispatch(completeHall({key: 'hallId', value: halls[hallIndex].id}));
    dispatch(removeHall(route.params.cinemaId));
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  React.useEffect(() => {
    setIsHallComplete(hallComplete);
  }, [hallValues]);

  React.useEffect(() => {
    setData(halls);
  }, [halls]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleModal = status => {
    setAddHallVisible(status);
  };

  const handleSubmit = () => {
    if (edit) {
      dispatch(editHall(route.params.cinemaId));
      setEdit(false);
      dispatch(reset());
    } else {
      dispatch(createHall(route.params.cinemaId));
      dispatch(reset());
    }
  };

  const handleEdit = hallIndex => {
    setAddHallVisible(true);
    setEdit(true);
    dispatch(completeHall({key: 'hallId', value: halls[hallIndex].id}));
    dispatch(loadHallFromBack(halls[hallIndex]));
  };

  const handleRemove = hallIndex => {
    setModalVisible(true);
    setHallIndex(hallIndex);
  };

  if (hallValues.hasError) {
    return (
      <SafeAreaView>
        <ErrorScreen message={hallValues.error} />
      </SafeAreaView>
    );
  }

  return (
    <CinemaHallsView
      addHallVisible={addHallVisible}
      completeHall={completeHall}
      data={data}
      dispatch={dispatch}
      edit={edit}
      hallValues={hallValues}
      handleCancel={handleCancel}
      handleConfirm={handleConfirm}
      handleEdit={handleEdit}
      handleModal={handleModal}
      handleRemove={handleRemove}
      handleSubmit={handleSubmit}
      isHallComplete={isHallComplete}
      modalVisible={modalVisible}
      navigateBack={navigateBack}
      reset={reset}
      setEdit={setEdit}
    />
  );
};
