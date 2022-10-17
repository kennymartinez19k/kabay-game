import React from 'react';
import {
  Text,
  HStack,
} from 'native-base';
import { StyleSheet, StatusBar} from 'react-native'



function Header() {
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <HStack style={styles.header} px="1" py="3" w="100%">
          <HStack alignItems="center">
            <Text color="white" fontSize="20" fontWeight="bold">
              Abogame
            </Text>
          </HStack>
          <HStack>
          </HStack>
        </HStack>
      </>;
  }

  const styles = StyleSheet.create({
    header:{
      width: '100%',
      backgroundColor: '#00028b'
    }
  });
  
  export default Header
