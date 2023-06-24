import React, {useState} from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {getCinemaByName, getCinemas} from '../../../../../api/cinemaController';
import {useSelector, useDispatch} from 'react-redux';
import {completeForm} from '../../../../../redux/slices/showFormSlice';

const PickCinemaStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const ownerCinemas = useSelector(state => state.ownerCinemas);
  const dispatch = useDispatch();

  const [items, setItems] = useState(ownerCinemas.cinemas);

  const MenuOptions = ({items, renderItem}) => {
    const useMenuState = (items) => {
      const [selectedIndex, setSelectedIndex] = useState(items.findIndex((item) => item.id=== formValues.cinemaId));
      const handleSelected = index => {
        setSelectedIndex(index);
        dispatch(
          completeForm({
            key: 'cinemaId',
            value: items[index?.row]?.id,
          }),
        );
      };
      return {selectedIndex, onSelect: handleSelected};
    };

    const menuState = useMenuState();

    return (
      <Menu style={{marginVertical: 16, maxHeight: '70%'}} {...menuState}>
        {items.map((item, index) => renderItem(item, index))}
      </Menu>
    );
  };

  const searchCinema = value => getCinemaByName(value);

  const handleSearch = value => {
    setItems(searchCinema(value));
  };

  const PinIcon = <Icon name="pin" />;

  const renderItem = (item, index) => (
    <MenuItem
      key={index}
      title={`${item.cinemaName}\n${
        item.active
          ? addresify(item)
          : I18n.t(TEXT_KEY.newCinemaShow.steps.firstStep.isAvailableLabel)
      }`}
      disabled={!item.active}
      accessoryLeft={PinIcon}/>
  );

  const addresify = item => {
    return `${item.address}, ${item.city}, ${item.province}, ${item.country}`;
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

export default PickCinemaStep;
