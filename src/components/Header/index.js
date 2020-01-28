import React from 'react';
import {View} from 'react-native';
import logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Top, Title, Logo} from './styles';

Icon.loadFont();

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Maximiler Arouca</Title>
      </Top>
      <Icon name="keyboard-arrow-down" color="#FFF" size={20} />
    </Container>
  );
}
