import React, { useState } from 'react';
import { Input, Text, Toggle } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { completeForm } from '../../../../redux/slices/formSlice';

export const CinemaFormDetails = () => {

    const formValues = useSelector((state) => state.form);
    const dispatch = useDispatch();

    return (
        <>
            <Text category="h6" style={styles.title}>
                Cinema details
            </Text>
            <Input
                label="Cinema name"
                placeholder="Cinema name"
                value={formValues?.cinemaName}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "cinemaName", value: text}))}
            />
            <Input
                label="Company Name"
                placeholder="Company Name"
                value={formValues?.companyName}
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "companyName", value: text}))}
            />
            <Input
                label="Price per show"
                placeholder="Insert price ($)"
                keyboardType='numeric'
                size="large"
                value={formValues?.pricePerShow}
                style={styles.formCtrl}
                onChangeText={(text) => dispatch(completeForm({key: "pricePerShow", value: text}))}
            />
            <Text category='label' appearance='hint' style={styles.text}>
                Status
            </Text>
            <Toggle
                style={styles.toggleContainer}
                checked={formValues?.active === true ? false : true}
                onChange={() => dispatch(completeForm({key: "active", value: !formValues.active}))}
                >
                Temporary Unavailable
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
