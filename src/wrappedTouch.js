import  {debounce} from 'lodash'; 
import React from 'react';
import {View,Text} from 'react-native';

 const wrappedTouch = (WrappedComponent) => {

  class WrappedTouchableComponent extends React.PureComponent {

    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    }

    onPress = debounce(this.debouncedOnPress, 100, { leading: true, trailing: false });

    render() {
      return (
      <WrappedComponent disabled={this.props.disabled} onPress={this.onPress}>
        <View>
            {this.props.children}
        </View>
      </WrappedComponent>
      );
    }
  }

  return WrappedTouchableComponent;
}

export default wrappedTouch;