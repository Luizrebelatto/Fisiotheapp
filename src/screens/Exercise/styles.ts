import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const ImageMain = styled.Image`
  margin-top: 15px;
  width: 90%;
  height: 45%;
`

export const TextExercise = styled.Text`
  font-size: 28px;
  color: #000000;
  padding-top: 30px;
  padding-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 6px;
  justify-content: center;
  margin-bottom: 30px;
`

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.title_button};
  font-size: 25px;
  font-weight: 600;
`;

export const ViewQuantityTitle = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewQuantity = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
`;

export const TextQuantity = styled.Text`
  color: ${({ theme }) => theme.colors.purple_light};
  font-size: 25px;
  font-weight: 900;
  text-align: center;
`;

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-weight: 900;
  
`;