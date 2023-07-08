import React, {useState} from 'react';
import {
  Button,
  Calendar,
  Input,
  Layout,
  NativeDateService,
  Autocomplete,
  Text,
} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import {useSelector, useDispatch} from 'react-redux';
import {completeForm} from '../../../../../redux/slices/showFormSlice';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ScrollView} from 'react-native';

const PickDateTimeStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();
  const initialDate =
    formValues.datetime === null ? new Date() : new Date(formValues.datetime);
  const [date, setDate] = useState(initialDate);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    handleDate(currentDate);
  };

  const handleDate = currentDate => {
    setDate(currentDate);
    dispatch(
      completeForm({
        key: 'datetime',
        value: currentDate.toISOString(),
      }),
    );
  };

  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      setShow(true);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const i18n = I18n.t(TEXT_KEY.calendar);
  const localeDateService = new NativeDateService(I18n.locale, {
    i18n,
    startDayOfWeek: 1,
  });

  return (
    <ScrollView style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.title)}
        </Text>
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.subtitle)}
        </Text>
      </Layout>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Calendar
          dateService={localeDateService}
          date={date}
          onSelect={nextDate => handleDate(nextDate)}
        />
      </Layout>
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <Text style={{flex: 2, fontWeight: 'bold'}} category="p1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.timePickerLabel)}:
        </Text>
        <Autocomplete
          // FIXME: See if we can use anothe element to avoid opening the keyboard
          style={{flex: 3}}
          placeholder={I18n.t(
            TEXT_KEY.newCinemaShow.steps.fourthStep.timePickerPlaceholder,
          )}
          value={date?.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
          disabled={date === null}
          onPressIn={showTimepicker}
        />
      </Layout>
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </ScrollView>
  );
};

export default PickDateTimeStep;
