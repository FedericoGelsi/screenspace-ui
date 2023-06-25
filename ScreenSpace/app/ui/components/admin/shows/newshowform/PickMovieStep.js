import React, {useState} from 'react';
import {Icon, Image, Layout, Menu, MenuItem, Text} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {getMoviesAPI} from '../../../../../networking/api/endpoints/moviesWS';
import {getMovies} from '../../../../../redux/slices/moviesSlice';
import { completeForm } from '../../../../../redux/slices/showFormSlice';

const PickMovieStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const moviesValues = useSelector(state => state.movies);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  const [items, setItems] = useState(moviesValues.movies);

  const initialItem = items.findIndex(item => item.id === formValues.movieId);

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

  const searchMovie = movieName =>
  moviesValues.movies.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase()),
  );

  const handleSearch = value => {
    setItems(searchMovie(value));
  };

  const MovieIcon = <Icon name="film-outline" />;

  const renderItem = (item, index) => (
    <MenuItem
      key={index}
      title={`${item.title}\n${
        item.showing
          ? getMovieLenght(item)
          : I18n.t(TEXT_KEY.newCinemaShow.steps.thirdStep.isShowingLabel)
      }`}
      disabled={!item.showing}
      accessoryLeft={MovieIcon}
      onPress={() =>
        dispatch(
          completeForm({
            key: 'movieId',
            value: item.id,
          }),
        )
      }
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
