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

export const BookingCard = ({navigateAction, item}) => {
  const fechaHora = new Date(item.item.timetable);

  const dateFormated = fechaHora.toLocaleDateString();
  return (
    <Card
      style={styles.card}
      header={headerProps => (
        <Header {...headerProps} name={item.item.movie.title} />
      )}
      onPress={() => navigateAction(item)}>
      <Layout style={styles.layout}>
        <Layout style={styles.iconText}>
          <Icon
            style={{width: 32, height: 32}}
            fill="#8F9BB3"
            name="calendar-outline"
          />
          <Text style={styles.textDate}>
            {I18n.t(TEXT_KEY.userBookings.date)}
          </Text>
        </Layout>

        <Text>{dateFormated}</Text>
      </Layout>
    </Card>
  );
};

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
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDate: {
    marginHorizontal: 8,
  },
});
