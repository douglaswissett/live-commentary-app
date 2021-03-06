import React, { PureComponent } from 'react';
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux';
// @ts-ignore
import Timeline from 'react-native-timeline-feed';
import { RootState } from '../redux/store';
import { AppState } from '../redux/app/reducer';

const DEFAULT_CIRCLE_SIZE = 16;

interface FeedItemProps {
  circleSize: number;
  flatlistRef: {};
}

interface Props {
  app: AppState;
}

class Feed extends PureComponent<Props> {
  prevItem: FeedItemProps | void = undefined;

  handleOnEventPress = (item: FeedItemProps) => {
    item.circleSize = DEFAULT_CIRCLE_SIZE * 2;

    if (this.prevItem) this.prevItem.circleSize = DEFAULT_CIRCLE_SIZE;

    this.prevItem = item;

    if (this.props.flatlistRef !== null && this.props.flatlistRef.current !== null) {
      this.props.flatlistRef.current.scrollToItem({ item });
    }

    this.forceUpdate();
  };

  onRefresh = () => console.log('pull to refresh');

  render() {
    const { data, isFetching } = this.props.app;
    return (
      <Timeline
        data={(data && data.live_commentary) || []}
        onEventPress={this.handleOnEventPress}
        flatListProps={{
          ref: this.props.flatlistRef,
          contentContainerStyle: {
            paddingHorizontal: 20,
          },
          refreshControl: <RefreshControl refreshing={isFetching} onRefresh={this.onRefresh} />,
        }}
        // Styling props
        timeStyle={{
          textAlign: 'center',
          backgroundColor: 'dodgerblue',
          color: 'white',
          fontSize: 24,
        }}
        descriptionStyle={{ color: 'gray' }}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

export default connect(mapStateToProps)(Feed);
