import React from 'react';
import {
  Box,
  ScrollView,
  Text
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet} from 'react-native'
import Header from '../src/components/Header';
import globalStyles from '../styles/global';

const LawyerOffice = props => {
  const navigation = useNavigation();
  return (
      <Box
      style={[styles.container]}>
        <ScrollView style={styles.list_item}>
            <Box style={[styles.item_map]}>
              <Text style={globalStyles.text_bold}>Ver mas cercanos en mapa </Text>
            </Box>

            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Oficinas Martinez</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Oficinas Rodriguez y Hermanos</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Consultorio Peña</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Oficinas Martinez</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Oficinas Martinez</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Oficinas Martinez</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={styles.title}>Oficinas Martinez</Text>
              </Box>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold ]}>Direccion: </Text>Carretera mella km 10 1/2 #17</Text>
              <Text style={globalStyles.marginTop}><Text style={[globalStyles.text_bold]}>Telefono: </Text>829-980-1009</Text>

            </Box>
           
        </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  list_item:{
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff'
  },
  header:{
    width: '100%',
    backgroundColor: '#00028b'
  },
  item:{
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 8,
  },
  status_box:{
    flexDirection: 'row'
  },
  item_heading:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item_map:{
    padding: 10,
    borderBottomColor: '#ccc',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderWidth: 1
    
  },
  title:{
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase'
  }
 
});



export default LawyerOffice