import React from 'react';
import { Container, Greeting, ImageMain, Button, ButtonText, Text } from './styles';

import ImageWelcome from '../../assets/person.png';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {

  const navigation = useNavigation<any>();

  function nextScreen(){
    navigation.navigate('Exercise')
  }
  
  return (
   <Container>
     <ImageMain source={ImageWelcome}/> 
     <Greeting>Olá, Luiz!</Greeting>
     <Text>Vamos iniciar o seu tratamento? :)</Text>
     <Button activeOpacity={0.8} onPress={nextScreen}>
       <ButtonText>Iniciar Tratamento</ButtonText>
     </Button>
   </Container>
  );
}
