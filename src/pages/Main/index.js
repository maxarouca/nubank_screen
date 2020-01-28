import React from 'react';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import {View} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '~/components/Menu';

Icon.loadFont();

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 200.000,01</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida hoje as 06:00hs
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
