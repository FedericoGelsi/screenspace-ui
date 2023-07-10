import React from 'react';
import {StyleSheet} from 'react-native';
import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {completeForm} from '../../redux/slices/formSlice';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

const genres = [
  {id: 1, genre: 'Accion'},
  {id: 2, genre: 'Comedia'},
  {id: 3, genre: 'Crimen'},
  {id: 4, genre: 'Drama'},
  {id: 5, genre: 'Horror'},
  {id: 6, genre: 'Historico'},
  {id: 7, genre: 'Romance'},
  {id: 8, genre: 'Fantasia'},
  {id: 9, genre: 'Policial'},
  {id: 10, genre: 'Ciencia Ficcion'},
];

export const GenrePicker = ({actualGenre, handlePick}) => {
  let selectedGenre = genres.find(item => item.genre === actualGenre);
  const [selectedIndex, setSelectedIndex] = React.useState(
    new IndexPath(selectedGenre == null ? 0 : selectedGenre.id - 1),
  );
  const displayValue = genres[selectedIndex.row].genre;

  return (
    <Layout style={styles.container} level="1">
      <Select
        style={styles.select}
        placeholder="Select a Genre"
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={index => {
          setSelectedIndex(index);
          handlePick('genre', genres[index.row].genre);
        }}>
        {genres.map(genre => (
          <SelectItem key={genre.id} title={genre.genre} />
        ))}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    alignSelf: 'flex-start',
  },
});
