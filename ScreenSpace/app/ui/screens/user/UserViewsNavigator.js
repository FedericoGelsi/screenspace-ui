import React from 'react';
import ViewTopNavigationContainer from '../../components/ViewTopNavigationContainer';
import AppFooter from '../../components/user/AppFooter';
import {Layout, Text} from '@ui-kitten/components';
import UserHome from './UserHome';
import BookingsView from './BookingsView';
import SettingsView from './SettingsView';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const UserViewsNavigator = ({navigation, route}) => {
  const useBottomNavigationState = (initialState = 0) => {
    const [selectedIndex, setSelectedIndex] = React.useState(initialState);
    return {selectedIndex, onSelect: setSelectedIndex};
  };

  const bottonNavigationState = useBottomNavigationState();
  return (
    <SafeAreaProvider>
      {bottonNavigationState.selectedIndex === 0 && <UserHome navigation={navigation} route={route} />}
      {bottonNavigationState.selectedIndex === 1 && <BookingsView navigation={navigation}/>}
      {bottonNavigationState.selectedIndex === 2 && <SettingsView navigation={navigation}/>}
      <AppFooter state={bottonNavigationState} />
    </SafeAreaProvider>
  );
};

export default UserViewsNavigator;
