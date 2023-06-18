import React from "react";
import { Button, Modal, Text, Card } from "@ui-kitten/components"
import { StyleSheet } from "react-native";

export const SuccessModal = ({ text, buttonText, action }) => {
    const [visible, setVisible] = React.useState(true);

    return (
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => {
                setVisible(false);
                action();
            }}
        >
            <Card disabled={true} style={{ width: '80%', alignSelf: 'center' }}>
                <Text style={{ marginBottom: 10, textAlign: 'center' }}>
                    {text}
                </Text>
                <Button status="success" onPress={() => {
                    setVisible(false);
                    action();
                }}>
                    {buttonText}
                </Button>
            </Card>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
});