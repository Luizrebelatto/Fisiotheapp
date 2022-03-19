import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ImageMain = styled.Image`
  width: 70%;
  height: 100px;
`

export const Greeting = styled.Text`
  font-size: 40px;
  color: #000000;
  padding-top: 30px;
`;

export const Text = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  padding: 30px 0px;
`;

export const Button = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 6px;
  justify-content: center;
`

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.title_button};
  font-size: 25px;
  font-weight: 600;
`;

