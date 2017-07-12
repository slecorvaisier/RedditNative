import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Search from './components/Search';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    console.log(this.props.posts);
    if (this.props.posts.isFetching) {
      return <Text>loading...</Text>;
    }
    return <List posts={this.props.posts}/>;
  }

  render() {
    return (
      <View>
        <Search/>
        {this.renderList()}
      </View>
    );
  }
}

export default connect(
  state => {
    console.log('state ', state);
    return {
      posts: state.list,
    };
  }
)(App);

const styles = StyleSheet.create({
  
});