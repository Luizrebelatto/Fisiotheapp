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
  return (
    <Container>
    <ImageMain source={ImageExercise}/> 
    <TextExercise>Close and open hands</TextExercise>
    <Button activeOpacity={0.8}>
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
