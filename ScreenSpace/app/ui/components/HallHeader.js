import React from "react";
import { Button, Layout, Text } from "@ui-kitten/components"
import { StyleSheet } from "react-native";

export const HallHeader = ({handleModal}) => {
    return (
        <Layout style={styles.headerContainer}>
            <Text category='h6'>
                Halls
            </Text>
            <Button size='tiny' style={styles.buttonStyle} onPress={() => handleModal(true)}>
                Add Hall
            </Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderRadius: 1000,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        left: '4%',
        width: '90%',
    },
  });