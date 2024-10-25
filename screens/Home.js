import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.historyContainer}>
    <Image source={require('../assets/History.jpg')} style={styles.historyImage}></Image>
    </View>
      <Text>Welcome to making History</Text>
      <Text>Get your own history carousel and add it in there</Text>
      {/* Container for buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
          <Text style={styles.carousel}>Go To Carousel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.carousel}>Login To Carousel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the component takes up the full screen
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    backgroundColor: 'lightblue', 
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons left to right
    marginTop: 20, // Add space above buttons
  },
  carousel: {
    marginHorizontal: 10, // Add spacing between the buttons
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 50, // Circular buttons
    textAlign: 'center',
  },
  historyContainer: {
    alignItems: "center"
  },
  historyImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 20
  }
});
