import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const SlidesItem = ({item}) => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.container, {width}]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode: "contain"}]}></Image>

      <View className={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

export default SlidesItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f5', // Light background color for better contrast
    paddingVertical: 30,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 10, // Rounded corners for the image
    shadowColor: '#000', // Drop shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontWeight: '900', // Bolder text
    fontSize: 28, // Slightly smaller for cleaner look
    color: '#333', // Darker color for better readability
    textAlign: 'center',
    marginBottom: 10, // Space between title and description
    paddingHorizontal: 20, // Some padding for better text alignment
  },
  description: {
    fontSize: 16,
    lineHeight: 24, // Improved readability
    color: '#555', // Softer text color
    textAlign: 'center',
    paddingHorizontal: 20, // Add padding around description
  },
});
