import React, {useState} from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {completeForm} from '../../../../../redux/slices/showFormSlice';

const PickHallStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const ownerCinemas = useSelector(state => state.ownerCinemas);

  const dispatch = useDispatch();

  const halls = ownerCinemas.cinemas.find(cinema=> cinema.id === formValues.cinemaId).halls

  const [items, setItems] = useState(halls);
  const initialItem = items.findIndex(item => item.id === formValues.hallId);

  const MenuOptions = ({items, renderItem}) => {
    const useMenuState = (initialState = 1) => {
      const [selectedIndex, setSelectedIndex] = useState(initialState);
      return {selectedIndex, onSelect: setSelectedIndex};
    };

    const menuState = useMenuState();

    return (
      <Menu
        style={{marginVertical: 16, maxHeight: '70%'}}
        {...menuState}
        selectedIndex={{row: initialItem}}>
        {items.map((item, index) => renderItem(item, index))}
      </Menu>
    );
  };

  const searchHall = hallName =>
    halls.filter(hall =>
      hall.name.toLowerCase().includes(hallName.toLowerCase()),
    );

  const handleSearch = value => {
    setItems(searchHall(value));
  };

  const HallIcon = <Icon name="grid-outline" />;

  const renderItem = (item, index) => (
    <MenuItem
      key={index}
      title={`${item.name}\n${
        item.available
          ? getMaxCapacity(item)
          : I18n.t(TEXT_KEY.newCinemaShow.steps.secondStep.isAvailableLabel)
      }`}
      disabled={!item.available}
      accessoryLeft={HallIcon}
      onPress={() =>
        dispatch(
          completeForm({
            key: 'hallId',
            value: item.id,
          }),
        )
      }
    />
  );

  const getMaxCapacity = item => {
    return `${I18n.t(
      TEXT_KEY.newCinemaShow.steps.secondStep.maxCapacityLabel,
    )}: ${item.width * item.height}`;
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
