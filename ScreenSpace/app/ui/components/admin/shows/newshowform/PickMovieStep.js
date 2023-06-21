import React, {useState} from 'react';
import {Icon, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {getMovieByName, getMovies} from '../../../../../api/movieController';

const PickMovieStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const dispatch = useDispatch();

  const [items, setItems] = useState(getMovies());

  const MenuOptions = ({items, renderItem}) => {
    const useMenuState = (initialState = 1) => {
      const [selectedIndex, setSelectedIndex] = useState(initialState);
      return {selectedIndex, onSelect: setSelectedIndex};
    };

    const menuState = useMenuState();

    return (
      <Menu style={{marginVertical: 16, maxHeight: '70%'}} {...menuState}>
        {items.map((item, index) => renderItem(item, index))}
      </Menu>
    );
  };

  const searchHall = value => getMovieByName(value);

  const handleSearch = value => {
    setItems(searchHall(value));
  };

  const MovieIcon = <Icon name="film-outline" />;

  const renderItem = (item, index) => (
    <MenuItem
      key={index}
      title={`${item.title}\n${
        item.isShowing
          ? getMovieLenght(item)
          : I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.isShowingLabel)
      }`}
      disabled={!item.isShowing}
      accessoryLeft={MovieIcon}
    />
  );

  const getMovieLenght = item => {
    return `${I18n.t(
      TEXT_KEY.newCinemaShow.steps.thirdStep.movieLenghtLabel,
    )}: ${item.duration} minutes`;
  };

  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.title)}
        </Text>
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.subtitle)}
        </Text>
      </Layout>
      <SearchBar
        placeholder={I18n.t(
          TEXT_KEY.newCinemaShow.steps.thirdStep.searchBar.placeholder,
        )}
        setValue={handleSearch}
      />
      <MenuOptions items={items} renderItem={renderItem} />
    </Layout>
  );
};

export default PickMovieStep;
