import React from 'react';
import {StyleSheet} from 'react-native';
import {
  BottomNavigation,
  BottomNavigationProps,
  BottomNavigationTab,
  Icon,
  IconElement,
} from '@ui-kitten/components';

const PersonIcon = props => <Icon {...props} name="person-outline" />;

const BellIcon = props => <Icon {...props} name="bell-outline" />;

const EmailIcon = props => <Icon {...props} name="email-outline" />;

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return {selectedIndex, onSelect: setSelectedIndex};
};

export const AppFooter = () => {
  const topState = useBottomNavigationState();
  const bottomState = useBottomNavigationState();

  return (
    <BottomNavigation {...topState}>
      <BottomNavigationTab title="USERS" icon={PersonIcon} />
      <BottomNavigationTab title="ORDERS" icon={BellIcon} />
      <BottomNavigationTab title="TRANSACTIONS" icon={EmailIcon} />
    </BottomNavigation>
  );
};

export default AppFooter;