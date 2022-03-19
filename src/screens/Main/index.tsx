import React from 'react';
import { Container, Greeting, ImageMain, Button, ButtonText, Text } from './styles';

import ImageWelcome from '../../assets/person.png';

export default function MainScreen() {
  return (
   <Container>
     <ImageMain source={ImageWelcome}/> 
     <Greeting>Olá, Luiz!</Greeting>
     <Text>Vamos iniciar o seu tratamento? :)</Text>
     <Button activeOpacity={0.8}>
       <ButtonText>Iniciar Tratamento</ButtonText>
     </Button>
   </Container>
  );
}
