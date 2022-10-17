import React from 'react';
import {
  Heading,
  Text,
  FormControl,
  Box,
  Stack,
  Input,
  Button,
} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import { StyleSheet} from 'react-native'

const CreateAccount = () => {
  const navigation = useNavigation();
  return (
    <Box
      alignItems="center"
      style={[globalStyles.bgBlue]}>
      <Box style={styles.container_header}>
      
      </Box>
      <Box style={styles.content} w="100%">
        <Heading style={globalStyles.title} size="2xl">
          Crear Cuenta
        </Heading>
        <Text style={styles.helper}>Introduzca los siguientes datos para registrarse</Text>
        <FormControl isRequired style={styles.formcontrol}>
          <Stack mx="4">
            <FormControl.Label>
              <Text style={globalStyles.text}>Nombre</Text>
            </FormControl.Label>
            <Input
              style={globalStyles.input}
              type="text"
              placeholder="Nombre"
            />
          </Stack>
          <Stack mx="4">
            <FormControl.Label>
              <Text style={globalStyles.text}>Email</Text>
            </FormControl.Label>
            <Input style={globalStyles.input} type="text" placeholder="Email" />
          </Stack>
          <Stack mx="4">
            <FormControl.Label>
              <Text style={globalStyles.text}>Password</Text>
            </FormControl.Label>
            <Input
              style={globalStyles.input}
              type="password"
              placeholder="password"
            />
          </Stack>
          <Stack mx="4">
            <Button
              square
              block
              style={[globalStyles.button, globalStyles.buttonText]}
              onPress={() => console.log('hello world')}>
              Crear Cuenta
            </Button>
          </Stack>
        </FormControl>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={globalStyles.link}>
          Iniciar Seccion
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  helper:{
    fontSize: 14,
    textAlign: 'center',
    color: '#737373'
  },
  formcontrol:{
    marginTop: 40,
    
  },
  container_header:{
    width: '100%',
    height: 100
  },
  content: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor: '#fff'
  },
});

export default CreateAccount;
