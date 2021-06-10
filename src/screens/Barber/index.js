import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Api from '../../Api';
import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';
import {
  Container,
  Scroller,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwipeDot,
  SwipeItem,
  SwipeImage,
  UserInfo,
  UserInfoName,
  UserAvatar,
  UserFavButton,
  BackButton,
  ServiceItem,
  ServiceInfo,
  ServiceChooseButton,
  TestimonialItem,
  TestimonialInfo,
  TestimonialBody,
} from './styles';
import {LoadingIcon} from '../Preload/styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = React.useState(false);
  const [favorited, setFavorited] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({
    id: route.params.id,
    name: route.params.name,
    avatar: route.params.avatar,
    stars: route.params.stars,
  });
  const handleBackButton = () => {
    navigation.navigate('Home');
  };
  const handleServiceChoose = key => {
    setSelectedService(key);
    setShowModal(true);
  };

  React.useEffect(async () => {
    setLoading(true);
    const barberInfo = await Api.getBarber(userInfo.id);
    if (barberInfo.error == '') {
      setUserInfo(barberInfo.data);
      setFavorited(barberInfo.favorited);
    } else alert('Error: ' + barberInfo.error);
    setLoading(false);
  }, []);
  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            dot={<SwipeDot />}
            activeDot={<SwipeDot active={true} />}
            paginationStyle={{top: -185, right: 15, botto: null, left: null}}
            autoplay={true}>
            {userInfo.photos.map((photo, key) => (
              <SwipeItem key={key}>
                <SwipeImage source={{uri: photo.url}} resizeMode="cover" />
              </SwipeItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} />
            </UserInfo>
            <UserFavButton onPress={() => setFavorited(!favorited)}>
              <Text style={{fontSize: 24}}>{favorited ? '💙' : '🖤'}</Text>
            </UserFavButton>
          </UserInfoArea>
          {loading && <LoadingIcon sze="large" color="#000" />}
          <ServiceArea>
            <Text style={{fontSize: 25, marginLeft: 20}}>Serviços</Text>

            {userInfo.services &&
              userInfo.services.map((item, k) => (
                <ServiceItem key={k}>
                  <ServiceInfo>
                    <Text style={{fontSize: 16}}>{item.name}</Text>
                    <Text>R$ {item.price.toFixed(2)}</Text>
                  </ServiceInfo>
                  <ServiceChooseButton
                    onPress={() => {
                      handleServiceChoose(k);
                    }}>
                    <Text style={{fontSize: 18}}>Agendar!</Text>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
          </ServiceArea>

          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimonialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={
                  <Text style={{fontSize: 40, color: '#000'}}>{'<'}</Text>
                }
                nextButton={
                  <Text style={{fontSize: 40, color: '#000', marginLeft: 50}}>
                    {'>'}
                  </Text>
                }>
                {userInfo.testimonials.map((item, k) => (
                  <TestimonialItem key={k}>
                    <TestimonialInfo>
                      <Text style={{color: '#00c0d0', fontSize: 18}}>
                        {item.name}
                      </Text>
                      <Stars stars={item.rate} />
                    </TestimonialInfo>
                    <TestimonialBody>{item.body}</TestimonialBody>
                  </TestimonialItem>
                ))}
              </Swiper>
            </TestimonialArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <Text style={{fontSize: 40, color: 'fff'}}>{'<'}</Text>
      </BackButton>

      <BarberModal
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
        show={showModal}
      />
    </Container>
  );
};
