import React, {useState} from 'react';
import {
  Icon,
  Layout,
  Menu,
  MenuItem,
  Spinner,
  Text,
} from '@ui-kitten/components';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';
import SearchBar from '../../../SearchBar';
import {useSelector, useDispatch} from 'react-redux';
import {
  filterMoviesByTitle,
  getMovies,
} from '../../../../../redux/slices/moviesSlice';
import {completeForm} from '../../../../../redux/slices/showFormSlice';

const PickMovieStep = () => {
  const formValues = useSelector(state => state.newShowForm);
  const moviesValues = useSelector(state => state.movies);
  const dispatch = useDispatch();
  const [moviesData, setMoviesData] = React.useState(moviesValues.movies);

  React.useEffect(() => {
    dispatch(getMovies());
  }, [dispatch, handleSearch]);

  React.useEffect(() => {
    setMoviesData(moviesValues.movies);
  }, [moviesValues]);

  const MenuOptions = ({items, renderItem}) => {
    const initialItem = items?.findIndex(
      item => item.id === formValues.movieId,
    );
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
        {items?.map((item, index) => renderItem(item, index))}
      </Menu>
    );
  };

  const handleSearch = movieName => {
    setMoviesData(
      moviesValues.movies.filter(movie =>
        movie.title.toLowerCase().includes(movieName.toLowerCase()),
      ),
    );
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
      onPress={() => {
        dispatch(
          completeForm({
            key: 'movieId',
            value: item.id,
          }),
        );
        dispatch(
          completeForm({
            key: 'name',
            value: item.title,
          }),
        );
      }}
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
      {moviesValues.isLoading ? (
        <Layout
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner size="giant" />
        </Layout>
      ) : (
        moviesData.length !== 0 && (
          <MenuOptions items={moviesData} renderItem={renderItem} />
        )
      )}
    </Layout>
  );
};

export default PickMovieStep;
