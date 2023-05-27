import React from 'react';
import { Input, Text} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ProvincePicker } from '../../../components/ProvincePicker';

export const CinemaFormAddress = () => {

    return (
        <>
            <Text category="h6" style={styles.title}>
                    Cinema address
            </Text>
            <Input
                label="Street Address"
                placeholder="Street Address"
                size="large"
                style={styles.formCtrl}
            />
            <Input
                label="Postal Code"
                placeholder="Postal Code"
                size="large"
                style={styles.formCtrl}
            />
            <Input
                label="City"
                placeholder="City"
                size="large"
                style={styles.formCtrl}
            />
            <ProvincePicker/>
            <Input
                label="Country"
                placeholder="Country"
                size="large"
                style={styles.formCtrl}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    formCtrl: {
        marginBottom: 15,
    },
    title: {
        marginTop: 0,
        marginBottom: 10,
    },
});
