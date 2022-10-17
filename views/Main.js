import React from 'react';
import {
  Text,
  Box,
  Image,
  ScrollView,
  Pressable,
  View
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet} from 'react-native'
import Header from '../src/components/Header';
import globalStyles from '../styles/global';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';

const Main = props => {
  const navigation = useNavigation();
  return (
      <LinearGradient colors={['#1B99C0', '#48085F']}
        style={[ styles.linearGradient]}>
        
        <ScrollView style={styles.container}>
            <View style={styles.header}>

            </View>
            <ScrollView style={styles.main}>
              <Text style={styles.title}>Kabay</Text>
              <Text style={styles.subtitle}>Preguntas y Retos</Text>
              <Pressable onPress={() =>  navigation.navigate('Lawyer')} style={styles.main_item}>
                <FontAwesome name="heart" color="#fff" size={30} />
                <Text style={styles.text_medium}>Parejas</Text>
                <Text style={[styles.text_small, styles.text_gray]}>Enciende la chispa con tu pareja</Text>

              </Pressable>
              <View style={styles.list_item}>
                <Box style={styles.item}>
                  <MaterialIcons style={styles.text} name="people" size={50} />
                  <Text style={styles.text}>Juega con Amigos</Text>
                </Box>
                <Box style={styles.item}>
                  <MaterialIcons style={styles.text} name="question" size={50} />
                  <Text style={styles.text}>Crear preguntas y retos</Text>
                </Box>
                <Box style={styles.item}>
                <MaterialIcons name="whatshot" color="#fff" size={50} />
                  <Text style={styles.text}>Retos Picantes</Text>
                </Box>
                <Box style={styles.item}></Box>
              </View>

            </ScrollView>
            
        </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  
  container:{
    color: '#fff',
  },
  title:{
    color: '#fff' ,
    fontSize: 30,
    fontWeight: '800',
    height: 30,
    paddingTop: 10
  },
  main:{
    marginTop: 100
  },
  text:{
    color: '#fff',
    marginTop: 2
  },

  subtitle:{
    color: '#fff'
  },
  main_item:{
    backgroundColor: '#ffffff20',
    padding: 10,
    paddingEnd: 10,
    paddingLeft: 10,
    height: 110,
    marginTop: 20,
    marginBottom: 10
  },
  text_small: {
    color: '#fff',
    fontSize: 14
  },
  text_medium: {
    fontSize: 18,
    color: '#fff'
  },
  text_gray:{
    color: '#ccc'
  },
  list_item:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: 300
  },
  item:{
    backgroundColor: '#ffffff20',
    height: 110,
    width: '47%',
    marginBottom: 20,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center'

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 100
  },
});


export default Main