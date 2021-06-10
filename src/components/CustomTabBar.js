import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {UserContext} from '../contexts/UserContext';
const TabAraa = styled.View`
  height: 60px;
  background-color: #4eadbe;
  flex-direction: row;
`;
const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export default ({state, navigation}) => {
  const {state: user} = React.useContext(UserContext);
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  const TabItem = ({children, onPress, tela, midle}) => {
    let Tab = styled.TouchableOpacity`
      flex: 1;
      justify-content: center;
      align-items: center;
    `;
    if (midle) {
      Tab = styled.TouchableOpacity`
        flex: 1;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 40px;
        margin-top: -30px;
        background-color: white;
        border: 4px solid #4eadbe;
      `;
    }
    return (
      <Tab onPress={() => goTo(onPress)}>
        <Text
          style={{
            fontSize: 35,
            opacity: state.index === tela || tela === true ? 1 : 0.5,
          }}>
          {children}
        </Text>
      </Tab>
    );
  };

  return (
    <TabAraa>
      <TabItem tela={0} onPress="Home">
        🏡
      </TabItem>
      <TabItem tela={1} onPress="Search">
        🔎
      </TabItem>
      <TabItem tela={true} midle={true} onPress="Apointments">
        🗓
      </TabItem>
      <TabItem tela={3} onPress="Favorites">
        💙
      </TabItem>
      <TabItem tela={4} onPress="Profile">
        👤
      </TabItem>
    </TabAraa>
  );
};
