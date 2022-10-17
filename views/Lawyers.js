import React from 'react';
import {
  Box,
  ScrollView,
  Text,Image,
  Button,
  Pressable
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet} from 'react-native'
import globalStyles from '../styles/global';
import { justifyContent, margin } from 'styled-system';

const Lawyers = props => {
  const navigation = useNavigation();
  return (
      <ScrollView
      style={[globalStyles.container]}>
        <Box style={styles.list_item}>
        <Pressable style={[styles.item]} onPress={() =>  navigation.navigate('Lawyer')}>
              <Box style={styles.item_heading}>
                <Image alt="Publicar un Caso" style={styles.img} source={require('../assets/woman.png')}></Image>
              </Box>
              <Text style={styles.title}>Diana Acosta</Text>
              <Text style={globalStyles.text_center}>Abogado Inmobilario</Text>
              <Text style={styles.btn_text}>Contactar</Text>
            </Pressable>
            <Pressable style={[styles.item]} onPress={() =>  navigation.navigate('Lawyer')}>
              <Box style={styles.item_heading}>
                <Image alt="Publicar un Caso" style={styles.img} source={require('../assets/man.png')}></Image>
              </Box>
              <Text style={styles.title}>Juan Jose Garcia</Text>
              <Text style={globalStyles.text_center}>Abogado Inmobilario</Text>
              <Text style={styles.btn_text}>Contactar</Text>
            </Pressable>
            <Pressable style={[styles.item]} onPress={() =>  navigation.navigate('Lawyer')}>
              <Box style={styles.item_heading}>
                <Image alt="Publicar un Caso" style={styles.img} source={require('../assets/man.png')}></Image>
              </Box>
              <Text style={styles.title}>Wilson Perez</Text>
              <Text style={globalStyles.text_center}>Abogado Matrimonial</Text>
              <Text style={styles.btn_text}>Contactar</Text>

            </Pressable>
            <Pressable style={[styles.item]} onPress={() =>  navigation.navigate('Lawyer')}>
              <Box style={styles.item_heading}>
                <Image alt="Publicar un Caso" style={styles.img} source={require('../assets/woman.png')}></Image>
              </Box>
              <Text style={styles.title}>Maria Rodriguez</Text>
              <Text style={globalStyles.text_center}>Abogado Laboral</Text>
              <Text style={styles.btn_text}>Contactar</Text>

            </Pressable>
            <Pressable style={[styles.item]} onPress={() =>  navigation.navigate('Lawyer')}>
              <Box style={styles.item_heading}>
                <Image alt="Publicar un Caso" style={styles.img} source={require('../assets/man.png')}></Image>
              </Box>
              <Text style={styles.title}>Kenny Martinez</Text>
              <Text style={globalStyles.text_center}>Abogado Penal</Text>
              <Text style={styles.btn_text}>Contactar</Text>
            </Pressable>
        </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',

  },
  list_item:{
    marginTop: 10,
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  header:{
    width: '100%',
    backgroundColor: '#00028b'
  },
  item:{
    width: '44%',
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
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
    justifyContent: 'center',
    marginBottom: 10

  },
  img:{
    width: 70,
    height: 70
  },
  title:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
    
  },
  btn_text:{
    color: '#0089ed',
    textAlign: 'center',
    margin: 10,
    fontSize: 14
  }
 
});



export default Lawyers