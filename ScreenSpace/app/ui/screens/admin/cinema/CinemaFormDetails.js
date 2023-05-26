import React from 'react';
import { Input, Text, Radio, RadioGroup } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const CinemaFormDetails = () => {

    const [priceValue, setPriceValue] = React.useState('');

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <>
            <Text category="h6" style={styles.title}>
                Cinema details
            </Text>
            <Input
                label="Cinema name"
                placeholder="Cinema name"
                size="large"
                style={styles.formCtrl}
            />
            <Input
                label="Company Name"
                placeholder="Company Name"
                size="large"
                style={styles.formCtrl}
            />
            <Input
                label="Price per show"
                placeholder="Insert price ($)"
                keyboardType='numeric'
                size="large"
                style={styles.formCtrl}
                onChangeText={(text) => setPriceValue(text)}
            />
            <Text category='label' appearance='hint' style={styles.text}>
                Status
            </Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => setSelectedIndex(index)}
                style={styles.radioContainer}
            >
                <Radio>
                    Active
                </Radio>
                <Radio>
                    Temporary Unavailable
                </Radio>
            </RadioGroup>
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
    radioContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'flex-start',
    },
    text: {
        alignSelf: 'flex-start',
    },
    title: {
        marginTop: -40,
        marginBottom: 10,
    },
});
