import React, {useState} from 'react';
import {Calendar, Layout, NativeDateService, Text} from '@ui-kitten/components';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView} from 'react-native';
import {completeForm} from '../../../../redux/slices/movieBookingSlice';

const BookingDateStep = () => {
  const formValues = useSelector(state => state.movieBooking);
  const dispatch = useDispatch();
  const initialDate =
    formValues.datetime === null ? new Date() : new Date(formValues.datetime);
  const [date, setDate] = useState(initialDate);

  const handleDate = currentDate => {
    setDate(currentDate);
    dispatch(
      completeForm({
        key: 'datetime',
        value: currentDate.toISOString(),
      }),
    );
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
    </ScrollView>
  );
};

export default BookingDateStep;
