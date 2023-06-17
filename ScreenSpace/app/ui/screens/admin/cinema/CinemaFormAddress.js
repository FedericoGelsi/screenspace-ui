import React from 'react';
import { Input, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ProvincePicker } from '../../../components/ProvincePicker';
import { useSelector, useDispatch } from 'react-redux';
import { completeForm } from '../../../../redux/slices/formSlice';
import I18n from '../../../../assets/strings/I18n';
import TEXT_KEY from '../../../../assets/strings/TextKey';

export const CinemaFormAddress = () => {
    const formValues = useSelector((state) => state.form);
    const dispatch = useDispatch();

    return (
        <>
            <Text category="h6" style={styles.title}>
                {I18n.t(TEXT_KEY.cinemaForm.address.title)}
            </Text>
            <Input
                label={I18n.t(TEXT_KEY.cinemaForm.address.inputAddress)}
                placeholder={I18n.t(TEXT_KEY.cinemaForm.address.inputAddress)}
                value={formValues?.address}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "address", value: text}))}
            />
            <Input
                label={I18n.t(TEXT_KEY.cinemaForm.address.inputPostalCode)}
                placeholder={I18n.t(TEXT_KEY.cinemaForm.address.inputPostalCode)}
                value={formValues?.postalCode}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "postalCode", value: text}))}
            />
            <Input
                label={I18n.t(TEXT_KEY.cinemaForm.address.inputCity)}
                placeholder={I18n.t(TEXT_KEY.cinemaForm.address.inputCity)}
                value={formValues?.city}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "city", value: text}))}
            />
            <ProvincePicker actualProvince={formValues?.province}/>
            <Input
                label={I18n.t(TEXT_KEY.cinemaForm.address.inputCountry)}
                placeholder={I18n.t(TEXT_KEY.cinemaForm.address.inputCountry)}
                value={formValues?.country}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "country", value: text}))}
            />
        </>
    );
};

const styles = StyleSheet.create({
    formCtrl: {
        marginBottom: 15,
    },
    title: {
        marginBottom: 10,
    },
});
