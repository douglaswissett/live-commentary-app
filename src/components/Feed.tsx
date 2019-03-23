import React, { PureComponent } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
// @ts-ignore
import Timeline from 'react-native-timeline-feed';

const DEFAULT_CIRCLE_SIZE = 16;

interface FeedItemProps {
  circleSize: number;
}

interface Props {

}

class Feed extends PureComponent<Props> {
  flatlistRef = React.createRef<FlatList<any>>();

  prevItem: FeedItemProps | void = undefined;

  handleOnEventPress = (item: FeedItemProps) => {
    item.circleSize = DEFAULT_CIRCLE_SIZE * 2;

    if (this.prevItem) this.prevItem.circleSize = DEFAULT_CIRCLE_SIZE;

    this.prevItem = item;

    if (this.flatlistRef !== null && this.flatlistRef.current !== null) {
      this.flatlistRef.current.scrollToItem({ item });
    }

    this.forceUpdate();
  };

  onRefresh = () => console.log('pull to refresh');

  render() {
    const { data, isFetching } = this.props.app;
    return (
      <Timeline
        data={data.live_commentary}
        onEventPress={this.handleOnEventPress}
        flatListProps={{
          ref: this.flatlistRef,
          refreshControl: (
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.onRefresh}
            />
          ),
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  app: state.app,
});

export default connect(mapStateToProps)(Feed);
