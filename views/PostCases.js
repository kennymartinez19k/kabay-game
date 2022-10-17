import React, { useState } from 'react';
import {
  Box, Button, FormControl, Input, Select, Stack, Text, 
  CheckIcon
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet, TextInput} from 'react-native'
import globalStyles from '../styles/global';

const PostCases = props => {
  const [service, setService] = useState('Seleccione un valor')

  const navigation = useNavigation();
  return (
      <Box
      style={[styles.container]}>
        <Text style={styles.description}>Publica tu caso para encontrar abogados</Text>
        <FormControl style={styles.formControl}>
            <Stack mx="2">
            <FormControl.Label>
              <Text style={globalStyles.label_input}>Tipo de caso:</Text>
            </FormControl.Label>
            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label="Matrimoniales" value="ux" />
              <Select.Item label="Juridico" value="web" />
              <Select.Item label="Bienes raices" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </Stack>
          <Stack mx="2">
            <FormControl.Label>
              <Text style={globalStyles.label_input}>Describa la informacion de su caso:</Text>
            </FormControl.Label>
            <TextInput
              style={globalStyles.input}
              multiline = {true}
              textAlignVertical="top"
              numberOfLines = {4}
              placeholder="Informacion del caso"
            ></TextInput>
          </Stack>
          <Button 
            square
            block
            style={[globalStyles.button, globalStyles.buttonText]}
          >Publicar</Button>
        </FormControl>
    </Box>
  );
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10
  },
  formControl:{
    marginTop: 40
  },
  description:{
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center'
  }
});


export default PostCases