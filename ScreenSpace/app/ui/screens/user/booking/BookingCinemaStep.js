import React, {useState} from 'react';
import {
  Icon,
  Layout,
  Menu,
  MenuItem,
  Text,
  Spinner,
} from '@ui-kitten/components';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';
import SearchBar from '../../../components/SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet} from 'react-native';
import {getCinemasByMovie} from '../../../../redux/slices/userCinemaSlice';
import {completeForm} from '../../../../redux/slices/movieBookingSlice';

const BookingCinemaStep = () => {
  const formValues = useSelector(state => state.movieBooking);
  const cinemas = useSelector(state => state.userCinemas);
  const dispatch = useDispatch();
  const [items, setItems] = useState(cinemas.cinemas);

  const MenuOptions = ({items, renderItem}) => {
    const initialItem = items.findIndex(
      item => item.id === formValues.cinemaId,
    );
    const useMenuState = () => {
      const [selectedIndex, setSelectedIndex] = useState();
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

  const searchCinema = cinemaName =>
    cinemas.cinemas.filter(cinema =>
      cinema.cinemaName.toLowerCase().includes(cinemaName.toLowerCase()),
    );

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
      accessoryLeft={PinIcon}
      onPress={() =>
        dispatch(
          completeForm({
            key: 'cinemaId',
            value: item.id,
          }),
        )
      }
    />
  );

  const addresify = item => {
    return `${item.address}, ${item.city}, ${item.province}, ${item.country}`;
  };

  return (
    <Layout style={{flex: 1}}>
      {cinemas.isLoading ? (
        <Layout style={styles.noDataContainer}>
          <Spinner size="giant" />
        </Layout>
      ) : (
        <>
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
          <MenuOptions items={cinemas.cinemas} renderItem={renderItem} />
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default BookingCinemaStep;
