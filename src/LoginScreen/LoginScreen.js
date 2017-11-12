import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
} from 'native-base';

class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>LoginScreen</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
              <Form>
                <Item stackedLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item stackedLabel last>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
              <Button
                block
                primary
                style={{ marginTop: 10 }}
                onPress={() => {}}
              >
                <Text>Login</Text>
              </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
