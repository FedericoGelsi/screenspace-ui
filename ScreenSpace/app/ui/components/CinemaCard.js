import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text, Icon } from '@ui-kitten/components';

const DetailsIcon = (props) => (
    <Icon {...props} style={[props.style, styles.icon]} name='arrow-ios-forward-outline'/>
  );

const Header = (props) => (
    <View {...props} style={[props.style, styles.headerContainer]}>
        <Text category='h6'>
            Hoyts Abasto
        </Text>
        <Button
            style={styles.button}
            appearance='ghost'
            size='tiny'
            accessoryLeft={DetailsIcon}
        />
    </View>
);

export const CinemaCard = () => (
    <Card
        style={styles.card}
        header={Header}
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
    icon: {
        width: 32,
        height: 32,
    },
    button: {
        margin: -10,
    },
});
