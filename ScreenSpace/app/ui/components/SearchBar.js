import { Icon, Input } from '@ui-kitten/components';
import React, { useState } from 'react';

const SearchBar = (props) => {
  const SearchIcon = props => <Icon {...props} name="search" />;
  const {placeholder, setValue} = props;
  const [currentValue, setCurrentValue] = useState('');
  return (
    <Input
      {...props}
      placeholder={placeholder}
      value={currentValue}
      onChangeText={nextValue => setCurrentValue(nextValue)}
      onSubmitEditing={() => setValue(currentValue)}
      accessoryRight={SearchIcon}
    />
  );
};

export default SearchBar;
