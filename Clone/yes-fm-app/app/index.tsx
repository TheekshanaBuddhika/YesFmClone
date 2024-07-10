import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
const PlaceholderImage = require('../assets/images/yesfm.png');

export default function index() {
  return (
    <View
      style={
        styles.container
      }
    >
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F69B3',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 350,

  },
  image: {
    width: 300,
    height: 235,

  },
});

