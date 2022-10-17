import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base';
import Login from './views/Login';
import CreateAccount from './views/createAccount';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import Main from './views/Main';
import PostCases from './views/PostCases';
import Cases from './views/Cases';
import Lawyers from './views/Lawyers';
import LawyerOffice from './views/LawyerOffice';
import Lawyer from './views/Lawyer';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Store = configureStore({reducer: rootReducer});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerStyle: {backgroundColor: '#00028b'}, headerTitleStyle: {color: '#fff'}, headerTintColor: '#fff'}}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Iniciar Sessión',
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{
                headerShown: false,

              }}
              
            />
             <Stack.Screen
              name="Main"
              component={Main}
              options={{
                headerShown: false,
               
              }}
            />
            <Stack.Screen
              name="PostCases"
              component={PostCases}
              options={{
                title: 'Publicar un caso',
              }}
            />
            <Stack.Screen
              name="Cases"
              component={Cases}
              options={{
                title: 'Mis casos',
              }}
            />
            <Stack.Screen
              name="Lawyers"
              component={Lawyers}
              options={{
                title: 'Abogados',
                
              }}
            />
            <Stack.Screen
              name="LawyerOffice"
              component={LawyerOffice}
              options={{
                title: 'Oficinas de Abogados',
              }}
              />
             <Stack.Screen
              name="Lawyer"
              component={Lawyer}
              options={{
                title: 'Juan Martinez',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
