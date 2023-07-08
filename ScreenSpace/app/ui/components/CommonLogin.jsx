import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

export const CommonLogin = ({
  mainTitle,
  children,
  mainButtonAction,
  mainButtonText,
  bottonSectionSubText,
  bottonSectionMainText,
  bottonSectionAction,
  tempGoBack,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{mainTitle}</Text>
      {children}
      <TouchableOpacity style={styles.botonVerde}>
        <Button
          onPress={mainButtonAction}
          color="#00B578"
          title={mainButtonText}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.botonVerde}>
        <Button onPress={tempGoBack} color="#00B578" title="Back" />
      </TouchableOpacity>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
        <Text>{bottonSectionSubText}</Text>
        <TouchableOpacity onPress={bottonSectionAction}>
          <Text style={{color: '#1677FF', fontWeight: 'bold'}}>
            {bottonSectionMainText}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 40,
    borderRadius: 10,
    width:"90%",
    margin:20,
    padding:10
  },
  containerSvg: {
    // flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 42,
    color: '#34434D ',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  botonVerde: {
    width: '80%',
    marginTop: 15,
  },
});
