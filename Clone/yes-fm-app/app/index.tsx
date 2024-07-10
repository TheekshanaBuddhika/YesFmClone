import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
const PlaceholderImage = require('../assets/images/yesfm.png');
import { useRouter } from 'expo-router';

export default function index() {
  const router = useRouter();
  return (
    <View
      style={
        styles.container
      }
    >
      <TouchableOpacity style={styles.imageContainer} onPress={() => router.push('/home')}>
        <Image source={PlaceholderImage} style={styles.image} />
      </TouchableOpacity>
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

