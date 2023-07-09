import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

const GridLayout = ({data, renderItem, numColumns = 2}) => {
  const formatData = (data, numColumns) => {
    const dataLenght = Array.from(data).length;
    const numberOfFullRows = Math.floor(dataLenght / numColumns);

    let numberOfElementsLastRow = dataLenght - numberOfFullRows * numColumns;
    let items = [];
    data.forEach(element => {
      items.push({value: element, empty: false});
    });

    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      items.push({value: data, empty: true});
      numberOfElementsLastRow++;
    }
    return items;
  };

  const renderItemFunction = ({item, index}) => {
    if (item.empty === true) {
      return (
        <View key={index} style={[styles.item, styles.itemInvisible]}></View>
      );
    }
    return renderItem(styles.item, item.value);
  };
  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItemFunction}
      numColumns={numColumns}
    />
  );
};

export default GridLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  item: {
    flex: 1,
    margin: 4,
  },
});
