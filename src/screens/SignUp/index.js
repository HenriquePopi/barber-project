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
  const [nameFild, setNameFild] = React.useState('');
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  };
  const handleSignUpClick = async () => {
    if (emailFild && nameFild && passwordFild) {
      let json = await Api.signUp(nameFild, emailFild, passwordFild);
      console.log(json);
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
      } else alert('Error: ' + res.error);
    } else alert('Preencha os campos');
  };
  return (
    <Container>
      <BarberLogo />
      <InputArea>
        <SignInput
          InputIcon="👤"
          placeholder="Nome"
          value={nameFild}
          onChangeText={t => setNameFild(t)}
        />
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
        <CustomButton onPress={handleSignUpClick}>
          <CustomButtonText>CADASTRAR-ME</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ja possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
