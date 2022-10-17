import React from 'react';
import {
  Box,
  ScrollView,
  Text,Image,
  Button,
  Pressable,
  View
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet} from 'react-native'
import globalStyles from '../styles/global';
import { justifyContent, margin } from 'styled-system';
import {Linking} from 'react-native'
import { useState } from 'react';


const questions = [
  {
    id: 1,
    name: 'Has hecho una orgia'
  },
  {
    id: 2,
    name: 'Has besado a alguien'
  },
  {
    id: 3,
    name: 'Has besado a un gato'
  },
  {
    id: 4,
    name: 'Has besado a perro'
  },
  {
    id: 5,
    name: 'Has besado a carro'
  }
]


let cont = 0

const Lawyer = props => {
  const [question, setQuestion] = useState(questions[0])

  const nextQuestion = () => {

    if(questions[cont + 1]){
      cont++
    }else{
      cont = 0
    }
    setQuestion(questions[cont])
  }

  const navigation = useNavigation();
  return (
      <ScrollView
      style={[globalStyles.container]}>
        <View style={styles.container_cards}>
          <View style={styles.card}>
            <Text style={styles.text_small}>{question.name}</Text>
          </View>
        </View>
        <View style={styles.opt}>
          <Box style={styles.btn_container}>
            <Button style={styles.btn} onPress={() =>  nextQuestion()}>Cambiar</Button>
          </Box>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',

  },
 

  card:{
    width: '70%',
    height: '90%',
    backgroundColor: '#48085F',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_cards:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    minHeight: 500,
    alignItems: 'center'
  },
  text_small:{
    color: '#fff',
    fontSize: 16
  },
  btn_container:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn:{
    width: '50%'
  },

  opt:{
    marginTop: 20
  }
  
});



export default Lawyer