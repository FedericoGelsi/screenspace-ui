import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Icon } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props} style={[props.style, styles.headerContainer]}>
        <Text category='h6'>
            {props.name}
        </Text>
        <Icon
            style={{ width: 32, height: 32, borderColor: 'blue' }}
            fill='#1677FF'
            name='arrow-ios-forward-outline'
        />
    </View>
);

export const CinemaCard = ({navigateAction, item}) => (
    <Card
        style={styles.card}
        header={(headerProps) => (
            <Header {...headerProps} name={item.item.cinemaName} />
        )}
        onPress={() => navigateAction(item.index)}
    >
        <Text>
        {item.item.address + " " + item.item.postalCode}
        </Text>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginTop: 30,
        borderColor: '#1677FF',
        borderRadius: 16,
        elevation: 5,
        shadowColor: '#171717',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
