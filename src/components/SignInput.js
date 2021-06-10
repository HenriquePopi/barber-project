import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #83d6e3;
  flex-direction: column;
  border-radius: 30px;
  padding-left: 15px;
  margin-bottom: 15px;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #268596;
  margin-left: 20px;
  margin-top: -20px;
`;

const SignInput = ({InputIcon, placeholder, value, onChangeText, password}) => {
  const icon = (
    <Text style={{position: 'relative', top: 20, marginRight: 5}}>
      {InputIcon + '  '}
    </Text>
  );

  return (
    <>
      <InputArea>
        {icon}
        <Input
          placeholder={placeholder}
          placeholderTextColor="#268596"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}
        />
      </InputArea>
    </>
  );
};

export default SignInput;
