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

const Cases = props => {
  const navigation = useNavigation();
  return (
      <Box
      style={[styles.container]}>
        <ScrollView style={styles.list_item}>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={globalStyles.text_bold}>Caso Matrimonial</Text>
                <Text style={globalStyles.status_pending_text}>Pendiente</Text>
              </Box>
              <Text><Text style={globalStyles.text_bold}>Abogado: </Text>Juan Garcia</Text>
              <Text><Text style={globalStyles.text_bold}>Publicado: </Text>08-02-2020 11:00 PM</Text>

            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={globalStyles.text_bold}>Caso Inmobiliario</Text>
                <Text style={globalStyles.status_completed_text}>Completado</Text>
              </Box>
              <Text><Text style={globalStyles.text_bold}>Abogado: </Text>Kenny Martinez</Text>
              <Text><Text style={globalStyles.text_bold}>Publicado: </Text> 30-02-2020, 09:00 PM</Text>
            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={globalStyles.text_bold}>Caso Penal</Text>
                <Text style={globalStyles.status_canceled_text}>Cancelado</Text>
              </Box>
              <Text><Text style={globalStyles.text_bold}>Abogado: </Text>Saul Soto</Text>
              <Text><Text style={globalStyles.text_bold}>Publicado: </Text> 01-05-2020, 06:00 PM</Text>
            </Box>
            <Box style={[styles.item]}>
              <Box style={styles.item_heading}>
                <Text style={globalStyles.text_bold}>Caso Laborales</Text>
                <Text style={globalStyles.status_completed_text}>Completado</Text>
              </Box>
              <Text><Text style={globalStyles.text_bold}>Abogado: </Text>Wilson Rodriguez</Text>
              <Text><Text style={globalStyles.text_bold}>Publicado: </Text> 01-05-2020, 06:00 PM</Text>
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
 
});



export default Cases