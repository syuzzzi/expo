import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled, { css } from 'styled-components/native';

const Container = styled.View`
   flex: 1;
    background-color:#8a8a8a;
    align-items: center;
    justify-content: center;
`;

const cssText = css`
  font-size: 20px;
  font-weight: 600;
`;
const StyledText = styled.Text`
  ${cssText}
  color: blue;
`;
const ErrorText = styled(StyledText)`
  ${cssText}
  color: red;
`;
const StyledButton = styled.Button``;

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <StyledText>styled component</StyledText>
      <ErrorText>Error !!</ErrorText>
      <StyledButton title="Styled" onPress={() => alert('styled !!')}></StyledButton>
    </Container>
  );
}
