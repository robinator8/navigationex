import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  Card,
  CardItem,
} from 'native-base';
import { login, emailChanged, passwordChanged } from '../actions';

class LoginScreen extends Component {
  onLoginPress() {
    const { email, password } = this.props;
    this.props.login({ email, password }, () => { this.props.navigation.navigate('Profile'); });
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  renderButton(loggedIn) {
    if (loggedIn) {
      return (
        <Card>
          <CardItem>
            <Text>Logged In!</Text>
          </CardItem>
        </Card>
      );
    }

    return (
      <Button
        ref='LoginButton'
        block
        primary
        style={{ marginTop: 10 }}
        onPress={this.onLoginPress.bind(this)}
      >
        <Text>Login</Text>
      </Button>
    );
  }

  renderHeader() {
    return (
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
    );
  }

  render() {
    const { email, password, setPassword, loggedIn } = this.props;
    console.log('state', this.state);
    return (
      <Container>
        {this.renderHeader()}
        <Content
          padder
          keyboardShouldPersistTaps='always'
          keyboardDismissMode='on-drag'
        >
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input
                autoFocus
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={this.onEmailChange.bind(this)}
                value={email}
                returnKeyType='next'
                onSubmitEditing={() => {
                  this.refs.PasswordInput.wrappedInstance.focus();
                 }}
              />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input
                ref='PasswordInput'
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                value={(() => (setPassword ? password : undefined))()}
                returnKeyType='send'
                onSubmitEditing={loggedIn ? undefined : this.onLoginPress.bind(this)}
              />
            </Item>
          </Form>
          {this.renderButton(loggedIn)}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
    const { loggedIn, email, password, setPassword } = state.auth;
    return { loggedIn, email, password, setPassword };
};

export default connect(mapStateToProps, { login, emailChanged, passwordChanged })(LoginScreen);
