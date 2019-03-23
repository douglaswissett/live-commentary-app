import React from 'react';
import { StyleSheet, Text, Platform, UIManager } from 'react-native';
import { Container, Feed, Highlights } from './components';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props {}
const App: React.FunctionComponent<Props> = () => (
  <Container>
    <Text style={styles.title}>Live commentary</Text>
    <Feed />
    <Highlights />
  </Container>
);

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

export default App;
