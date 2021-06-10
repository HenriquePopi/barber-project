import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const RatingArea = styled.View`
  flex-direction: row;
`;
const Stars = ({show, stars}) => {
  let starsIcon = '';
  for (var i = 0; i < Math.floor(stars); i++) {
    starsIcon += '⭐️';
  }
  if (stars - Math.floor(stars) >= 0.5) starsIcon += '⭐️';

  return (
    <RatingArea>
      <Text>{starsIcon} </Text>
      <Text style={{fontWeight: '100', fontSize: 14}}>{stars}</Text>
    </RatingArea>
  );
};

export default Stars;
