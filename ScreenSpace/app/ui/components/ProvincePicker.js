import React from 'react';
import { StyleSheet } from 'react-native';
import { IndexPath, Layout, Select, SelectItem, Text } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { completeForm } from '../../redux/slices/formSlice';

const provinces = [
  { "id": 1, "name": "Buenos Aires" },
  { "id": 2, "name": "CABA" },
  { "id": 3, "name": "Catamarca" },
  { "id": 4, "name": "Chaco" },
  { "id": 5, "name": "Chubut" },
  { "id": 6, "name": "Córdoba" },
  { "id": 7, "name": "Corrientes" },
  { "id": 8, "name": "Entre Ríos" },
  { "id": 9, "name": "Formosa" },
  { "id": 10, "name": "Jujuy" },
  { "id": 11, "name": "La Pampa" },
  { "id": 12, "name": "La Rioja" },
  { "id": 13, "name": "Mendoza" },
  { "id": 14, "name": "Misiones" },
  { "id": 15, "name": "Neuquén" },
  { "id": 16, "name": "Río Negro" },
  { "id": 17, "name": "Salta" },
  { "id": 18, "name": "San Juan" },
  { "id": 19, "name": "San Luis" },
  { "id": 20, "name": "Santa Cruz" },
  { "id": 21, "name": "Santa Fe" },
  { "id": 22, "name": "Santiago del Estero" },
  { "id": 23, "name": "Tierra del Fuego" },
  { "id": 24, "name": "Tucumán" }
];


export const ProvincePicker = ({actualProvince}) => {
  const dispatch = useDispatch();
  let selectedProvince = provinces.find((item) => item.name === actualProvince);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(selectedProvince == null ? 0 : selectedProvince?.id - 1));
  const displayValue = provinces[selectedIndex.row].name;

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
            onSelect={(index) => {
              setSelectedIndex(index);
              dispatch(completeForm({key: "province", value: provinces[index - 1].name}))
            }}
      >
        {provinces.map((province) => (
            <SelectItem key={province.id} title={province.name} />
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