import React from 'react';
import { Input, Text} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ProvincePicker } from '../../../components/ProvincePicker';

export const CinemaFormAddress = ({editProps}) => {

    return (
        <>
            <Text category="h6" style={styles.title}>
                    Cinema address
            </Text>
            <Input
                label="Street Address"
                placeholder="Street Address"
                value={editProps?.address}
                size="large"
                style={styles.formCtrl}
            />
            <Input
                label="Postal Code"
                placeholder="Postal Code"
                value={editProps?.postalCode}
                size="large"
                style={styles.formCtrl}
            />
            <Input
                label="City"
                placeholder="City"
                value={editProps?.city}
                size="large"
                style={styles.formCtrl}
            />
            <ProvincePicker actualProvince={editProps?.province}/>
            <Input
                label="Country"
                placeholder="Country"
                value={editProps?.country}
                size="large"
                style={styles.formCtrl}
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
