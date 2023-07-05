import React from 'react';
import {View, Button} from 'react-native';
import {Share} from 'react-native';

const ShareContent = () => {
  const handleShare = () => {
    Share.share({
      message:
        'ScreenSpace App: Check out this amazing content! https://example.com',
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <View>
      <Button title="Share" onPress={handleShare} />
    </View>
  );
};

export default ShareContent;
