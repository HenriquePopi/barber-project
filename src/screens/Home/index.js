import React from 'react';
import {RefreshControl} from 'react-native';

import {Text} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import Api from '../../Api';
import BarberItem from '../../components/BarberItem';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationFinder,
  LocationInput,
  LoadingIcon,
  ListArea,
} from './styles';

const Icon = ({children}) => <Text style={{fontSize: 25}}>{children}</Text>;
export default () => {
  const navigation = useNavigation();
  const [locationText, setLocationText] = React.useState('');
  const [list, setList] = React.useState([]);
  const [coords, setCoords] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    getBarbers();
  };
  const getBarbers = async () => {
    setLoading(true);
    setList([]);
    let [lat, lng] = [null, null];
    if (coords) {
      lat = coords.latitude;
      lng = coords.longitude;
    }
    let res = await Api.getBarbers(lat, lng, locationText);
    if (res.error == '') {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setList(res.data);
    } else alert('Error' + res.error);
    setLoading(false);
  };

  const handleLocationFinder = async () => {
    setCoords(null);
    setList([]);

    let result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    if (result == 'granted') {
      setLoading(true);
      Geolocation.getCurrentPosition(info => {
        setCoords(info.coords);
        getBarbers();
      });
    }
  };
  const handleLocationSearch = () => {
    setCoords({});
    getBarbers();
  };
  React.useEffect(() => {
    getBarbers();
  }, []);
  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre seu Barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <Icon>🔎</Icon>
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            placeholder="Onde você esta?"
            placeholderTextColor="#fff"
            value={locationText}
            onChangeText={t => setLocationText(t)}
            onEndingEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <Icon>📍</Icon>
          </LocationFinder>
        </LocationArea>
        {loading && <LoadingIcon size="large" color="#fff" />}
        <ListArea>
          {list.map((item, index) => (
            <BarberItem key={index} data={item} />
          ))}
        </ListArea>
      </Scroller>
    </Container>
  );
};
