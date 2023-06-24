import React, {useState} from 'react';
import {
  Button,
  Calendar,
  Input,
  Layout,
  NativeDateService,
  Text,
} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import {useSelector, useDispatch} from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';

const PickDateTimeStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();

  const [date, setDate] = useState();
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
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
    <Layout style={{flex: 1}}>
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
          onSelect={nextDate => setDate(nextDate)}
        />
      </Layout>
      <Layout style={{flexDirection: "row", justifyContent:'space-evenly', alignItems: 'center', marginHorizontal:16}}>
        <Text style={{flex:2, fontWeight: "bold"}} category='p1'>{I18n.t(
            TEXT_KEY.newCinemaShow.steps.fourthStep.timePickerLabel,
          )}:</Text>
        <Input
          style={{flex:3}}
          placeholder={I18n.t(
            TEXT_KEY.newCinemaShow.steps.fourthStep.timePickerPlaceholder,
          )}
          value={
            date
              ? date.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : undefined
          }
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
      {/* <Text>{date.toLocaleString()}</Text> */}
    </Layout>
  );
};

export default PickDateTimeStep;
