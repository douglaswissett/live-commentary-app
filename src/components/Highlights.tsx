import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, LayoutAnimation, Image } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { AppState } from '../redux/app/reducer';

// Asset
import chevronPNG from '../assets/chevron.png';

const DEFAULT_CIRCLE_SIZE = 16;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderColor: 'dodgerblue',
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
    fontWeight: 'bold',
    color: 'tomato',
  },
  paragraph: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
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

interface Props {
  app: AppState;
}

interface State {
  open: boolean;
}

class Highlights extends PureComponent<Props, State> {
  prevItem: FeedItemProps | void = undefined;

  state = {
    open: true,
  };

  openClose = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState(prevState => ({ open: !prevState.open }));
  };

  _handleHighlightPress = hl => {
    const { data } = this.props.app;
    const item = data.live_commentary.find(lc => lc.id === hl.commentary_id);
    this.props.flatlistRef.current.scrollToItem({ item });
  };

  render() {
    const { data } = this.props.app;
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
            <Image source={chevronPNG} style={{ width: 16, height: 16 }} />
          </TouchableOpacity>
        </View>
        {this.state.open && (
          <View style={styles.body}>
            {data &&
              data.highlights &&
              data.highlights.map(hl => (
                <TouchableOpacity style={{ flex: 1 }} key={hl.id} onPress={() => this._handleHighlightPress(hl)}>
                  <Text style={styles.paragraph}>
                    <Text style={{ color: 'tomato', fontWeight: 'bold' }}>{hl.time}</Text>
                    {' - '}
                    {hl.title}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

export default connect(mapStateToProps)(Highlights);
