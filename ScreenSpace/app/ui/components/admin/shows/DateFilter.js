import React from 'react';
import {Datepicker, Icon} from '@ui-kitten/components';

const FilterIcon = props => <Icon {...props} name="funnel" />;

export const DateFilter = ({date, setDate}) => {
  return (
    <Datepicker
      style={{marginVertical: 16}}
      date={date}
      onSelect={nextDate => setDate(nextDate)}
      accessoryLeft={FilterIcon}
    />
  );
};
