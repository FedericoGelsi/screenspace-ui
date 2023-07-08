import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const GridLayout = ({data, renderItem, numColumns}) => {
  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.lenght / numColumns);

    let numberOfElementsLastRow = data.lenght - numberOfFullRows * numColumns;

    // while (
    //   numberOfElementsLastRow !== numColumns &&
    //   numberOfElementsLastRow !== 0
    // ) {
    //   data.push({empty: true});
    //   numberOfElementsLastRow++;
    // }
    return data;
  };

  const renderItemFunction = ({item, index}) => {
    if (item.empty === true) {
      return (
        <View key={index} style={[styles.item, styles.itemInvisible]}></View>
      );
    }
    return renderItem(styles.item, item);
  };
  return (
    <FlatList
      data={formatData(data, numColumns)}
      style={styles.container}
      renderItem={renderItemFunction}
      numColumns={numColumns}
      refreshing={true}
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
