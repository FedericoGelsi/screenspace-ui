import React from 'react';
import {Input, Text, Toggle} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

export const CinemaFormDetailsView = ({dispatch, formValues, completeForm}) => {
  return (
    <>
      <Text category="h6" style={styles.title}>
        {I18n.t(TEXT_KEY.cinemaForm.details.title)}
      </Text>
      <Input
        label={I18n.t(TEXT_KEY.cinemaForm.details.inputName)}
        placeholder={I18n.t(TEXT_KEY.cinemaForm.details.inputName)}
        value={formValues?.cinemaName}
        size="large"
        style={styles.formCtrl}
        onChangeText={text =>
          dispatch(completeForm({key: 'cinemaName', value: text}))
        }
      />
      <Input
        label={I18n.t(TEXT_KEY.cinemaForm.details.inputCompany)}
        placeholder={I18n.t(TEXT_KEY.cinemaForm.details.inputCompany)}
        value={formValues?.companyName}
        size="large"
        style={styles.formCtrl}
        onChangeText={text =>
          dispatch(completeForm({key: 'companyName', value: text}))
        }
      />
      <Input
        label={I18n.t(TEXT_KEY.cinemaForm.details.inputPrice)}
        placeholder={I18n.t(TEXT_KEY.cinemaForm.details.inputPricePlaceholder)}
        keyboardType="numeric"
        size="large"
        value={formValues?.pricePerShow}
        style={styles.formCtrl}
        onChangeText={text =>
          dispatch(completeForm({key: 'pricePerShow', value: text}))
        }
      />
      <Text category="label" appearance="hint" style={styles.text}>
        {I18n.t(TEXT_KEY.cinemaForm.details.inputStatus)}
      </Text>
      <Toggle
        style={styles.toggleContainer}
        checked={formValues?.active === true ? false : true}
        onChange={() =>
          dispatch(completeForm({key: 'active', value: !formValues.active}))
        }>
        {I18n.t(TEXT_KEY.cinemaForm.details.inputStatusPlaceholder)}
      </Toggle>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  formCtrl: {
    marginBottom: 30,
  },
  toggleContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
  },
  text: {
    alignSelf: 'flex-start',
  },
  title: {
    marginBottom: 10,
  },
});
