import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BarberLogo} from '../svgs/svgFake';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';
import Api from '../../Api';
import SignInput from '../../components/SignInput';
export default () => {
  const {dispatch: userDispatch} = React.useContext(UserContext);

  const navigation = useNavigation();
  const [emailFild, setEmailFild] = React.useState('');
  const [passwordFild, setPasswordFild] = React.useState('');
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };
  const handleSignClick = async () => {
    if (emailFild && passwordFild) {
      let json = await Api.signIn(emailFild, passwordFild);
      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
        });
        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else alert('Email e/ou senha invalido.');
    } else alert('Preencha os campos');
  };
  return (
    <Container>
      <BarberLogo />
      <InputArea>
        <SignInput
          InputIcon="✉️"
          placeholder="Email"
          value={emailFild}
          onChangeText={t => setEmailFild(t)}
        />
        <SignInput
          InputIcon="🔒"
          placeholder="Senha"
          value={passwordFild}
          onChangeText={t => setPasswordFild(t)}
          password={true}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
