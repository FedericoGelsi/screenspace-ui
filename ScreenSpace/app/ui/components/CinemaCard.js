import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Icon, Layout, Button} from '@ui-kitten/components';
import I18n from '../../assets/strings/I18n';
import TEXT_KEY from '../../assets/strings/TextKey';

const Header = props => (
  <View {...props} style={[props.style, styles.headerContainer]}>
    <Text category="h6">{props.name}</Text>
    <Icon
      style={{width: 32, height: 32, borderColor: 'blue'}}
      fill="#1677FF"
      name="arrow-ios-forward-outline"
    />
  </View>
);

export const CinemaCard = ({navigateAction, navigateShows, item}) => (
  <Card
    style={styles.card}
    header={headerProps => (
      <Header {...headerProps} name={item.item.cinemaName} />
    )}
    onPress={() => navigateAction(item.index)}>
    <Layout
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{flex: 6}}>
        {item.item.address + ' ' + item.item.postalCode}
      </Text>
      <Button
        style={{flex: 3}}
        status="primary"
        size="small"
        accessoryLeft={<Icon name="tv-outline" />}
        onPress={() => navigateShows(item.item.id)}>
        {I18n.t(TEXT_KEY.cinemaCard.showsButton)}
      </Button>
    </Layout>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderColor: '#1677FF',
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#171717',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
