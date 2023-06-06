import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { Divider, Icon, List, Layout, Text, TopNavigation, TopNavigationAction, Button, Modal, Card, RadioGroup, Radio, Input } from '@ui-kitten/components';
import { NoData } from '../../../components/NoData';
import { HallCard } from '../../../components/HallCard';
import { HallHeader } from '../../../components/HallHeader';

const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" />
);

const data = new Array(2).fill({
    title: 'Item',
  });

export const Stepper = ({title}) => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
      <Layout style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', right: '5%' }}>
        <Text category="s1" style={{ marginHorizontal: 8 }}>
          {title}
        </Text>
        <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button size='tiny' onPress={decrement} appearance="outline" status="primary">
            -
            </Button>
            <Text category="h6" style={{ marginHorizontal: 8 }}>
            {count}
            </Text>
            <Button size='tiny' onPress={increment} appearance="outline" status="primary">
            +
            </Button>
        </Layout>
      </Layout>
    );
  };

export const CinemaHalls = ({ navigation }) => {

  const [addHallVisible, setAddHallVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleModal = (status) => {
    setAddHallVisible(status);
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', height: '100%'}}>
      <TopNavigation title="ScreenSpace" alignment="center" accessoryLeft={BackAction} style={{height: '8%'}}/>
      <Divider/>
      {data.length === 0 ? (
        <Layout style={styles.noDataContainer}>
            <HallHeader handleModal={handleModal}/>
            <NoData message="You do not have halls yet"/>
        </Layout>
      ) : (
      <Layout style={styles.hallContainer}>
        <HallHeader handleModal={handleModal}/>
        <List
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={HallCard}
        />
      </Layout>
      )}
      <Divider/>
      <Layout style={styles.actionLayout}>
        <Button status="success" style={styles.oneButton} onPress={() => navigateBack()}>
            Finish
        </Button>
      </Layout>
      <Modal
        visible={addHallVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setAddHallVisible(false)}
        style={styles.modal}
      >
        <Card disabled={true}>
        <Layout style={styles.radioContainer}>
            <Text category="s1" style={{ marginRight: 8 }}>
                Hall Name
            </Text>
            <Input
                placeholder='Hall name'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                style={styles.formCtrl}
            />
        </Layout>
           <Divider style={styles.divider}/>
          <Stepper title={"Number of lines"}/>
          <Divider style={styles.divider}/>
          <Stepper title={"Number of seats per line"}/>
          <Divider style={styles.divider}/>
          <Layout style={styles.radioContainer}>
            <Text category="s1" style={{ marginRight: 8 }}>
              Status
            </Text>
            <RadioGroup
                    selectedIndex={selectedIndex}
                    onChange={index => setSelectedIndex(index)}
                    style={styles.radioButtonContainer}
                >
                    <Radio>
                        Active
                    </Radio>
                    <Radio>
                        Inactive
                    </Radio>
                </RadioGroup>
          </Layout>
          <Divider style={styles.divider}/>
          <Button status="success" onPress={() => {
            setAddHallVisible(false);
            }}>
            Save Changes
          </Button>
        </Card>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    hallContainer: {
      height: '82%',
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    noDataContainer: {
      height: '82%',
      display: 'flex',
      backgroundColor: '#FFFFFF',
    },
    contentContainer: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      paddingHorizontal: 20,
    },
    actionLayout: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        height: '10%',
    },
    oneButton: {
        borderRadius: 1000,
        width: 300,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        left: '4%',
        width: '90%',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        width: '90%',
    },
    divider: {
        marginTop: '1%',
        marginBottom: '3%',
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        right: '2%',
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    formCtrl: {
        flexGrow: 1,
    },
  });
