import {StyleSheet} from 'react-native';
import { fontSize } from 'styled-system';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
    
  },
  title: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 26,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0003ae',
    width: '70%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 10,
    borderRadius: 50

  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFF',
  },
  text: {
    color: '#333',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  normal_text:{
    color: '#333' 
  },
  label_input:{
    color: '#333',
    
  },
  link: {
    color: '#00028b',
    marginTop: 60,
    textAlign: 'center',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  bgBlue:{
    backgroundColor: '#00028b',
    flex: 1
  },

  status_pending_text:{
    color: 'orange',
    fontWeight: '700'
  },
  status_completed_text:{
    color: '#009d00',
    fontWeight: '700'

  },
  status_canceled_text:{
    color: '#ae1400',
    fontWeight: '700',
  },
  text_bold:{
    fontWeight: '700',
  },
  text_center:{
    textAlign: 'center'
  },
  marginTop: {
    marginTop: 3,
  }
});
export default globalStyles;
