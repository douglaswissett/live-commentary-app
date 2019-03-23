import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface Props {
  children: any[], // TODO
  style?: Object
}

const Container = ({ children, style }: Props) => (
  <SafeAreaView style={[styles.container, style]}>
    { children }
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Container;
