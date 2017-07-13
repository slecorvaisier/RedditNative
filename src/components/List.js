import React, { Component } from 'React';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import Card from './Card';

export default ({ posts }) => {
  if (posts.data.length === 0) {
    return <Text>no content</Text>;
  }
  
  return (
    <ScrollView>
      {posts.data.map(post => (
        <Card key={post.id} post={post} />        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  }
});