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

export default ({ posts }) => {
  if (posts.data.length === 0) {
    return <Text>no content</Text>;
  }
  
  return (
    <ScrollView>
      {posts.data.map(post => (
        <View key={post.id}>
          {post.thumbnail && 
            <Image
              style={{width: post.thumbnail.width, height: post.thumbnail.height}}
              source={{uri: post.thumbnail.url}}
            /> 
          }
          <Text>{post.title}</Text>
          <Text>by {post.author}</Text>
        </View>        
      ))}
    </ScrollView>
  );
};