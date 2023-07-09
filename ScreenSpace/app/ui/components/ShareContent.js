import {Icon, TopNavigationAction} from '@ui-kitten/components';
import React from 'react';
import {Share} from 'react-native';

const ShareContent = ({movieTitle}) => {
  const handleShare = () => {
    const link = `https://www.imdb.com/find/?q=${movieTitle}`
    Share.share({
      message:
        `ScreenSpace App: Check out this amazing content!\n${encodeURI(link)}`,
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <TopNavigationAction
      onPress={handleShare}
      icon={props => <Icon {...props} name="external-link-outline" />}
    />
  );
};

export default ShareContent;
