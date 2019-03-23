import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Feed } from './components';

interface Props {}
export default class App extends PureComponent<Props> {
  render() {
    return (
      <Container>
        <Text style={styles.title}>Live commentary</Text>
        <Feed />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    paddingBottom: 10,
  },
});