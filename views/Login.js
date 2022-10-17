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
import {connect} from 'react-redux';
import {addUser} from '../actions';
import { StyleSheet} from 'react-native'


const Login = props => {
  console.log(props);
  const navigation = useNavigation();
  return (
    <Box
      alignItems="center"
      style={[globalStyles.bgBlue]}>
      <Box style={styles.container_header}>
      
      </Box>
      <Box style={styles.content} w="100%">
        <Heading style={globalStyles.title}>
          Inicio de Sesión
        </Heading>
        <Text style={styles.helper}>Introduzca su numero y contraseña, luego presione el boton para iniciar seccion</Text>

        {/* <Text style={globalStyles.text}>{props.user.all_user}</Text> */}

        <FormControl isRequired style={styles.formcontrol}>
          <Stack mx="4">
            <FormControl.Label>
              <Text style={globalStyles.text}>Usuario</Text>
            </FormControl.Label>
            <Input
              style={globalStyles.input}
              type="text"
              placeholder="Usuario"
            />
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
              onPress={() =>  navigation.navigate('Main')}>
              Iniciar Sesión
            </Button>
          </Stack>
        </FormControl>
        <Text
          onPress={() => navigation.navigate('CreateAccount')}
          style={globalStyles.link}>
          Crear Cuenta
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
  container:{
    flex: 1,
    backgroundColor: '#00028b'
  }
});


const mapStateToProps = state => {
  console.log('STATE::: ');
  console.log(state);
  const {user, person} = state;
  return {user, person};
};

const mapDispatchToProps = {
  // getUsers,
  // createUser,
  // deleteUser,
  // updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
