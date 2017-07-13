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
import { fetchAllPosts } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  renderList() {
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
    return {
      posts: state.list,
    };
  },
  { fetchAllPosts }
)(App);

const styles = StyleSheet.create({
  
});