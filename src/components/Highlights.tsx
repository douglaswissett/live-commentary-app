import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LayoutAnimation, Image } from 'react-native';

interface Props {}
interface State {
  open: boolean;
}
export default class Highlights extends PureComponent<Props, State> {
  state = {
    open: true,
  };

  openClose = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <View style={[styles.container, { height: this.state.open ? 200 : 60 }]}>
        <View style={styles.header}>
          <View style={{ width: 44 }} />
          <Text style={styles.title}>Key moments</Text>
          <TouchableOpacity
            style={[
              styles.button,
              {
                transform: [{ rotate: this.state.open ? '180deg' : '0deg' }],
              },
            ]}
            onPress={this.openClose}
          >
            <Image source={require('../assets/chevron.png')} style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
        </View>
        {this.state.open && (
          <View style={styles.body}>
            <Text style={styles.paragraph}>TEST EVENT HERE</Text>
            <Text style={styles.paragraph}>TEST EVENT HERE</Text>
            <Text style={styles.paragraph}>TEST EVENT HERE</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  body: {
    paddingTop: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  paragraph: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
