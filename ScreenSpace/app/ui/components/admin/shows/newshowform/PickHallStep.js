import React, {useState} from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {getHallByName, getHalls} from '../../../../../api/cinemaController';
import {useSelector, useDispatch} from 'react-redux';

const PickHallStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();

  const [items, setItems] = useState(getHalls(0));

  const MenuOptions = ({items, renderItem}) => {
    const useMenuState = (initialState = 1) => {
      const [selectedIndex, setSelectedIndex] = useState(initialState);
      return {selectedIndex, onSelect: setSelectedIndex};
    };

    const menuState = useMenuState();

    return (
      <Menu style={{marginVertical: 16, maxHeight: '70%'}} {...menuState}>
        {items.map(item => renderItem(item))}
      </Menu>
    );
  };

  const searchHall = value => getHallByName(value);

  const handleSearch = value => {
    setItems(searchHall(value));
  };

  const PinIcon = <Icon name="pin" />;

  const renderItem = item => (
    <MenuItem
      title={`${item.name}\n${
        item.available ? getMaxCapacity(item) : 'Temporarly unavailable'
      }`}
      disabled={!item.available}
      accessoryLeft={PinIcon}
    />
  );

  const getMaxCapacity = item => {
    return `${I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.maxCapacityLabel)}: ${item.width*item.height}}`;
  };

  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.title)}
        </Text>
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.subtitle)}
        </Text>
      </Layout>
      <SearchBar
        placeholder={I18n.t(
          TEXT_KEY.newCinemaShow.steps.secondStep.searchBar.placeholder,
        )}
        setValue={handleSearch}
      />
      <MenuOptions items={items} renderItem={renderItem} />
    </Layout>
  );
};

export default PickHallStep;
