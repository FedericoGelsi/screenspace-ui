import React from 'react';
import {Datepicker, Icon, NativeDateService, TopNavigationAction} from '@ui-kitten/components';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

const FilterIcon = props => <Icon {...props} name="funnel" />;

const CancelIcon = props => <Icon {...props} name="close-outline" />;

export const DateFilter = ({date, setDate}) => {

  const CancelAction = props => (
    <TopNavigationAction icon={CancelIcon} onPress={() => setDate()}/>
  );

  const i18n = I18n.t(TEXT_KEY.calendar);
  const localeDateService = new NativeDateService(I18n.locale, {
    i18n,
    startDayOfWeek: 1,
  });
  return (
    <Datepicker
      placeholder={I18n.t(TEXT_KEY.cinemaShows.dateFilterPlaceholder)}
      dateService={localeDateService}
      style={{marginVertical: 16}}
      date={date}
      onSelect={nextDate => setDate(nextDate)}
      accessoryLeft={FilterIcon}
      accessoryRight={CancelAction}
    />
  );
};
