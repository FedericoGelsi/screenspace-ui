import React from 'react';
import { Button, Icon } from '@ui-kitten/components';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

export const CreateNewShowButton = ({onPress}) => {
  return (
    <Button style={{ margin: 16 }} status="success" accessoryLeft={<Icon name="plus" />} onPress={onPress}>
      {I18n.t(TEXT_KEY.cinemaShows.newShowButton)}
    </Button>
  );
};
