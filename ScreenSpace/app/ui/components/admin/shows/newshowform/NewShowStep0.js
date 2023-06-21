import React, {useState} from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {getCinemaByName, getCinemas} from '../../../../../api/cinemaController';
import {useSelector, useDispatch} from 'react-redux';

const NewShowStep0 = () => {
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();

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

  const [items, setItems] = useState(getCinemas());

  const searchCinema = value => getCinemaByName(value);

  const handleSearch = value => {
    setItems(searchCinema(value));
  };

  const PinIcon = <Icon name="pin" />;

  const renderItem = item => (
    <MenuItem
      title={`${item.name}\n${
        item.available ? addresify(item) : 'Temporarly unavailable'
      }`}
      disabled={!item.available}
      accessoryLeft={PinIcon}
    />
  );

  const addresify = item => {
    return `${item.calle} ${item.numero}, ${item.localidad}, ${item.provincia}, ${item.pais}`;
  };

  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.title)}
        </Text>
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.subtitle)}
        </Text>
      </Layout>
      <SearchBar
        placeholder={I18n.t(
          TEXT_KEY.newCinemaShow.steps.firstStep.searchBar.placeholder,
        )}
        setValue={handleSearch}
      />
      <MenuOptions items={items} renderItem={renderItem} />
    </Layout>
  );
};

export default NewShowStep0;
