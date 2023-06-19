import { Icon, Input } from '@ui-kitten/components';
import React, { useState } from 'react';

const SearchBar = ({placeholder, setValue}) => {
  const SearchIcon = props => <Icon {...props} name="search" />;
  const [currentValue, setCurrentValue] = useState('');
  return (
    <Input
      placeholder={placeholder}
      value={currentValue}
      onChangeText={nextValue => setCurrentValue(nextValue)}
      onSubmitEditing={() => setValue(currentValue)}
      accessoryRight={SearchIcon}
    />
  );
};

export default SearchBar;
