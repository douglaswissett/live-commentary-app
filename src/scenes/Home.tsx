import React, { PureComponent } from 'react';
import { StyleSheet, Text, Platform, UIManager, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, Feed, Highlights } from '../components';
import { getLiveCommentary } from '../redux/app/actions';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
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
    fontWeight: 'bold',
    color: 'tomato',
    paddingBottom: 10,
  },
});

interface Props {
  dispatchGetLiveCommentary: () => void;
}

export class Home extends PureComponent<Props> {
  flatlistRef = React.createRef<FlatList<any>>();

  componentDidMount = () => {
    this.props.dispatchGetLiveCommentary();
  };

  render() {
    return (
      <Container>
        <Text style={styles.title}>Live commentary</Text>
        <Feed flatlistRef={this.flatlistRef} />
        <Highlights flatlistRef={this.flatlistRef} />
      </Container>
    );
  }
}

const mapDispatchToProps = {
  dispatchGetLiveCommentary: () => getLiveCommentary(),
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
