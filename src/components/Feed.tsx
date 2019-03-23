import React, { Component } from 'react';
import { FlatList } from 'react-native';
// @ts-ignore
import Timeline from 'react-native-timeline-feed';

const api = require('../api/data');

const DEFAULT_CIRCLE_SIZE = 16;

interface FeedItemProps {
  circleSize: number;
}

export default class Feed extends Component {
  flatlistRef = React.createRef<FlatList<any>>();

  prevItem: FeedItemProps | void = undefined;

  state = {
    data: [],
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ data: api.live_commentary });
    }, 800);
  };

  handleOnEventPress = (item: FeedItemProps) => {
    item.circleSize = DEFAULT_CIRCLE_SIZE * 2;

    if (this.prevItem) this.prevItem.circleSize = DEFAULT_CIRCLE_SIZE;

    this.prevItem = item;

    if (this.flatlistRef !== null && this.flatlistRef.current !== null) {
      this.flatlistRef.current.scrollToItem({ item });
    }

    this.forceUpdate();
  };

  render(): Component {
    const { data } = this.state;
    return (
      <Timeline
        data={data}
        onEventPress={this.handleOnEventPress}
        flatListProps={{
          ref: this.flatlistRef,
        }}
      />
    );
  }
}
