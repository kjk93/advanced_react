import React from 'react';
import storeProvider from './storeProvider';

class TimeStamp extends React.Component {
  static timeDisplay = (timestamp) => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestampDisplay: TimeStamp.timeDisplay(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(TimeStamp);