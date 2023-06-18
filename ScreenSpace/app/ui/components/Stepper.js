import {useDispatch, useSelector} from 'react-redux';
import {completeHall} from '../../redux/slices/hallSlice';
import {Button, Layout, Text} from '@ui-kitten/components';

export const Stepper = ({title, hallKey}) => {
  const hallValues = useSelector(state => state.hall);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(completeHall({key: hallKey, value: hallValues[hallKey] + 1}));
  };

  const decrement = () => {
    if (hallValues[hallKey] > 0) {
      dispatch(completeHall({key: hallKey, value: hallValues[hallKey] - 1}));
    }
  };

  return (
    <Layout
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        right: '5%',
      }}>
      <Text category="s1" style={{marginHorizontal: 8}}>
        {title}
      </Text>
      <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button
          size="tiny"
          onPress={() => decrement()}
          appearance="outline"
          status="primary">
          -
        </Button>
        <Text category="h6" style={{marginHorizontal: 8}}>
          {hallValues[hallKey]}
        </Text>
        <Button
          size="tiny"
          onPress={() => increment()}
          appearance="outline"
          status="primary">
          +
        </Button>
      </Layout>
    </Layout>
  );
};
