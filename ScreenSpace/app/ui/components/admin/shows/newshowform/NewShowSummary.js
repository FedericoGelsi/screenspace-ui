import {
  Card,
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import React from 'react';
import I18n from '../../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../../assets/strings/TextKey';

const NewShowSummary = () => {
  const data = [
    {
      icon: 'film-outline',
      value: 'Movie',
      label: 'Everything Everywhere All at Once',
    },
    {
      icon: 'pin-outline',
      label: 'Cinema',
      value: 'Hoyts Abasto',
    },
    {
      icon: 'grid-outline',
      label: 'Hall',
      value: 'Main Hall',
    },
    {
      icon: 'calendar',
      label: 'Date',
      value: '03/04/2022',
    },
    {
      icon: 'clock-outline',
      label: 'Time',
      value: '07:15 PM',
    },
    {
      icon: 'film-outline',
      label: 'Duration',
      value: '135 minutes',
    },
  ];

  const renderItem = ({item, index}) => (
    <ListItem
      accessoryLeft={<Icon name={item.icon ? item.icon : 'info-outline'} />}
      title={item.value}
      description={item.label}
    />
  );
  return (
    <Layout style={{flex: 1}}>
      <Layout style={{marginVertical: 16, alignItems: 'center'}}>
        <Text category="h4" style={{textAlign: 'center'}}>
          {I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.title)}
        </Text>
        <Text category="s1">
          {I18n.t(TEXT_KEY.newCinemaShow.steps.summaryStep.subtitle)}
        </Text>
      </Layout>
      <Card status="success" style={{marginHorizontal: 8}}>
        <List
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={Divider}
        />
      </Card>
    </Layout>
  );
};

export default NewShowSummary;
