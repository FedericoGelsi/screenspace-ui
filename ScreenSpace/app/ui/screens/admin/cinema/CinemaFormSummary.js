import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, List, ListItem, Text, Icon, Layout } from '@ui-kitten/components';

const CinemaFormSummary = ({header}) => {
    return (
        <>
            <Text category="h6" style={styles.title}>
                {header}
            </Text>

            <Layout style={styles.layout}>
                <View style={styles.container}>
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='film-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Cinema
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            Hoyts Alto Palermo
                        </Text>
                    </Layout>
                    <Divider style={styles.divider} />
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='map-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Street
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            Beruti 3399, C1425
                        </Text>
                    </Layout>
                    <Divider style={styles.divider} />
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='navigation-2-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            City
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            CABA
                        </Text>
                    </Layout>
                    <Divider style={styles.divider} />
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='navigation-2-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Province
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            Buenos Aires
                        </Text>
                    </Layout>
                    <Divider style={styles.divider} />
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='navigation-2-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Country
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            Argentina
                        </Text>
                    </Layout>
                    <Divider />
                </View>
                <View style={styles.container}>
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='pricetags-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Price per seat
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            $20
                        </Text>
                    </Layout>
                    <Divider style={styles.divider} />
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='film-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Cinema Status
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            Temporary Unavailable
                        </Text>
                    </Layout>
                    <Divider style={styles.divider} />
                    <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ width: 32, height: 32 }}
                            fill='#8F9BB3'
                            name='alert-circle-outline'
                        />
                        <Text category="s1" style={{ marginHorizontal: 8 }}>
                            Company
                        </Text>
                        <Text category="s1" style={{ flexGrow: 1, textAlign: 'right' }}>
                            Hoyts
                        </Text>
                    </Layout>
                    <Divider />
                </View>
            </Layout>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 20,
        borderRadius: 16,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
        width: '100%',
    },
    divider: {
        marginBottom: 10,
    },
    layout: {
        flex: 1,
        width: '100%',
    },
    title: {
        marginTop: -10,
        marginBottom: 10,
    },

});

export default CinemaFormSummary;
