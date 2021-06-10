import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;
export const Scroller = styled.ScrollView`
  flex: 1;
`;
export const SwipeDot = styled.View`
  height: 10px;
  width: 10px;
  background-color: ${props => (props.active ? 'black' : '#fff')};
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63c2d1;
`;
export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;

export const FakeSwiper = styled.View`
  flex: 1;
  height: 200px;
  margin-top: -40px;
  background-color: #63c2d1;
`;
export const PageBody = styled.View`
  flex: 1;
  margin-top: -40px;
  background-color: white;
  border-top-left-radius: 50px;
`;
export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -20px;
`;
export const UserInfo = styled.View`
  margin-top: 10px;
  justify-content: flex-end;
  padding-bottom: 10px;
`;
export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: white;
`;
export const UserInfoName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
  height: 38px;
  width: 38px;
  background-color: white;
  border-radius: 20px;
  border: 2px solid #9999;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  top: 15px;
  left: 15px;
  position: absolute;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00c0d0;
  height: 50px;
  padding: 15px;
  border-radius: 10px;
  margin-left: 10px;
`;

export const ServiceItem = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 20px;
`;
export const ServiceInfo = styled.View`
  padding: 10px;
  flex: 1;
  border: 3px solid #63c2d1;
  border-radius: 30px;
`;

export const ServiceArea = styled.View``;
export const TestimonialArea = styled.View`
  padding-bottom: 30px;
`;

export const TestimonialItem = styled.View`
  background-color: #268596;
  padding: 15px;
  height: 110px;
  border-radius: 10px;
  justify-content: center;
  margin: 0 40px;
`;

export const TestimonialInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 35px;
`;

export const TestimonialBody = styled.Text`
  font-size: 13px;
  color: white;
  letter-spacing: 0.5px;
`;
