import { useNavigation } from '@react-navigation/native';
import React from 'react';

import ImageExercise from '../../assets/hand.png'

import { 
  Container, 
  TextExercise, 
  ImageMain, 
  Button, 
  ButtonText,
  ViewQuantityTitle,
  TextTitle,
  ViewQuantity,
  TextQuantity
 } from './styles';

export default function Exercise() {
  const navigation = useNavigation<any>();

  function nextScreen(){
    navigation.navigate('Main');
  }

  return (
    <Container>
    <ImageMain source={ImageExercise}/> 
    <TextExercise>Close and open hands</TextExercise>
    <Button activeOpacity={0.8} onPress={nextScreen}>
      <ButtonText>Done!</ButtonText>
    </Button>

    <ViewQuantityTitle>
      <TextTitle>Series</TextTitle>
      <TextTitle>Repetions</TextTitle>
      <TextTitle>Rest</TextTitle>
    </ViewQuantityTitle>

    <ViewQuantity>
      <TextQuantity>3x</TextQuantity>
      <TextQuantity>10</TextQuantity>
      <TextQuantity>20 seg</TextQuantity>
    </ViewQuantity>
  </Container>
  );
}
