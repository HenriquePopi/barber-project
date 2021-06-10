import {Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

export const BarberLogo = () => {
  const Container = styled.View`
    background-color: #03c2d1;
    border-radius: 80px;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 25,
        }}>
        MakeItSmooth
      </Text>
    </Container>
  );
};
