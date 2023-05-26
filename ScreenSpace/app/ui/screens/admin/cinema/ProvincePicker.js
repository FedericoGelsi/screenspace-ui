import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';

const provinces = [
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ];

export const ProvincePicker = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = provinces[selectedIndex.row];

  return (
    <Layout
      style={styles.container}
      level='1'
    >
        <Text category='label' appearance='hint' style={styles.text}>
            Province
        </Text>
        <Select
            style={styles.select}
            placeholder='Select a Province'
            value={displayValue}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
      >
        {provinces.map((province) => (
            <SelectItem title={province} />
        ))}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    alignSelf: 'flex-start',
  },
  text: {
    marginBottom: 2,
  }
});