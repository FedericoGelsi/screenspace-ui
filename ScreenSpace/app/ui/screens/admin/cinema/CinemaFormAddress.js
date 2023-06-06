import React from 'react';
import { Input, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ProvincePicker } from '../../../components/ProvincePicker';
import { useSelector, useDispatch } from 'react-redux';
import { completeForm } from '../../../../redux/slices/formSlice';

export const CinemaFormAddress = () => {
    const formValues = useSelector((state) => state.form);
    const dispatch = useDispatch();

    return (
        <>
            <Text category="h6" style={styles.title}>
                    Cinema address
            </Text>
            <Input
                label="Street Address"
                placeholder="Street Address"
                value={formValues?.address}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "address", value: text}))}
            />
            <Input
                label="Postal Code"
                placeholder="Postal Code"
                value={formValues?.postalCode}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "postalCode", value: text}))}
            />
            <Input
                label="City"
                placeholder="City"
                value={formValues?.city}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "city", value: text}))}
            />
            <ProvincePicker actualProvince={formValues?.province}/>
            <Input
                label="Country"
                placeholder="Country"
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
