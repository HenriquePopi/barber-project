import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Modal = styled.Modal``;
const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;
const ModalBody = styled.View`
  background-color: #83d6e3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;
const ModalItem = styled.View`
  background-color: white;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 10px;
`;
const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
const UserAvatar = styled.Image`
  height: 56px;
  width: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;
const UserName = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;
const BarberModal = ({show, setShow, user, service}) => {
  const navigation = useNavigation();
  return (
    <Modal transparent={true} visible={show} animationType="slide">
      <ModalArea>
        <ModalBody>
          <CloseButton
            onPress={() => {
              setShow(false);
            }}>
            <Text>\/</Text>
          </CloseButton>
          <ModalItem>
            <UserInfo>
              <UserAvatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
            </UserInfo>
          </ModalItem>
          {service != null && (
            <ModalItem>
              <UserInfo>
                <UserName>{user.services[service].name}</UserName>
                <UserName>
                  R$:{'   ' + user.services[service].price.toFixed(2)}
                </UserName>
              </UserInfo>
            </ModalItem>
          )}
        </ModalBody>
      </ModalArea>
    </Modal>
  );
};

export default BarberModal;
