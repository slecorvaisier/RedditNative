import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet } from 'react-native';

const PostCard = ({ post }) => {
  return (
    <View style={styles.card}>
      {post.thumbnail &&
        <Image 
          style={{width: post.thumbnail.width, height: post.thumbnail.height}}
          source={{uri: post.thumbnail.url}}
        />
      }
      <View style={styles.body}>
        <Text 
          style={styles.title}
        >
          {post.title}
        </Text>
        <Text style={styles.author}>by {post.author}</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    backgroundColor: '#efefef',
  },
  thumbnail: {
    flex: 1,
  },
  body: {
    flex: 2,
    marginLeft: 8,
  },
  title: {
    color: "#545454",
    fontWeight: "bold",
  },
  author: {
    color: "#545454",
    fontStyle: "italic",
    fontSize: 10,
  }
});