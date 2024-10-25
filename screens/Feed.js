import { StyleSheet, Text, View, Button, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import Sliders from '../component/Sliders'

const Feed = () => {
  return (
    <View style={styles.container}>
      <Sliders />
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the Feed component takes up the full screen
    justifyContent: 'center', // Optionally center the content vertically
    alignItems: 'center', // Optionally center the content horizontally
  },
})
