import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {View} from 'react-native';

const IncrementalButton = ({
  title,
  value,
  handler,
  limit = Number.MAX_SAFE_INTEGER,
}) => {
  const decrementHandler = () => {
    if (value !== 0) handler(value - 1);
  };
  const incrementHandler = () => {
    if (value + 1 !== limit) handler(value + 1);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{marginHorizontal: 16, fontWeight: 'bold'}}>{title}</Text>
      <Input
        textStyle={{color: '#000', textAlign: 'center', fontWeight: 'bold'}}
        status="control"
        keyboardType="number-pad"
        inputMode="numeric"
        value={String(value)}
        onChangeText={newValue => handler(newValue)}
        accessoryLeft={
          <Button
            size="tiny"
            appearance="outline"
            onPress={decrementHandler}
            accessoryLeft={<Icon name="minus" />}
          />
        }
        accessoryRight={
          <Button
            size="tiny"
            appearance="outline"
            onPress={incrementHandler}
            accessoryLeft={<Icon name="plus" />}
          />
        }
      />
    </View>
  );
};

export default IncrementalButton;
