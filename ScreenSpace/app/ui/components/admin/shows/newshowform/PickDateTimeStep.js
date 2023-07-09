import React, {useState} from 'react';
import {
  Button,
  Calendar,
  Input,
  Layout,
  NativeDateService,
  Autocomplete,
  Text,
  Divider,
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
  const now = new Date();
  const min = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return (
    <ScrollView style={{flex: 1, paddingVertical: 16}}>
      <Layout style={{marginBottom: 16, alignItems: 'center'}}>
        <Text category="h4">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.title)}
        </Text>
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.subtitle)}
        </Text>
      </Layout>
      <Calendar
        style={{flex: 1}}
        dateService={localeDateService}
        date={date}
        onSelect={nextDate => handleDate(nextDate)}
        min={min}
        renderFooter={() => (
          <Layout
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Divider />
            <Text style={{fontWeight: 'bold'}} category="p1">
              {I18n.t(TEXT_KEY.newCinemaShow.steps.fourthStep.timePickerLabel)}:
            </Text>
            <Autocomplete
              // FIXME: See if we can use anothe element to avoid opening the keyboard
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
        )}
      />

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
