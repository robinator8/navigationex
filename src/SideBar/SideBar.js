import React from 'react';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
} from 'native-base';

const routes = ['Home', 'Chat', 'Profile'];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={routes}
            renderRow={data => (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              )}
          />
        </Content>
      </Container>
    );
  }
}
