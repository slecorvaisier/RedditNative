import React, { Component } from 'React';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';
import { fetchAllPosts } from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }  

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          placeholder="search subreddit"
          onChangeText={(text) => this.setState({ search: text })}
        />
        <Button
          style={styles.searchBtn}
          onPress={() => this.props.fetchAllPosts(this.state.search)}
          title="Search"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
} 

export default connect(null, { fetchAllPosts })(Search);

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  search: {
    height: 40,
  },
  searchBtn: {
  
  },
});