import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Icon } from '@ui-kitten/components';

const Header = (props) => (
    <View {...props} style={[props.style, styles.headerContainer]}>
        <Text category='h6'>
            Hoyts Abasto
        </Text>
        <Icon
            style={{ width: 32, height: 32, borderColor: 'blue' }}
            fill='#1677FF'
            name='arrow-ios-forward-outline'
        />
    </View>
);

export const CinemaCard = ({navigateAction}) => (
    <Card
        style={styles.card}
        header={Header}
        onPress={() => navigateAction()}
    >
        <Text>
        Av. Corrientes 3247, C1193AAE CABA
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
