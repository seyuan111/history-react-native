import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const SignUp = () => {
  const navigation = useNavigation(); // Hook to use navigation

  return (
    <View style={styles.container}>
      {/* Go Back to Login Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Back to Login</Text>
      </TouchableOpacity>
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/LoginImage.jpg')} style={styles.loginImage}></Image>
      </View>
      
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Carousel</Text>
        <Text style={styles.signInText}>Sign Up to Carousel</Text>
      </View>
      
      <View style={styles.viewContainer}>
        <TextInput style={styles.inputContainer} placeholder="Enter your email" />
        <TextInput style={styles.inputContainer} secureTextEntry={true} placeholder="Enter your password" />
        <TextInput style={styles.inputContainer} secureTextEntry={true} placeholder="Confirm Password" />
      </View>
      
      <TouchableOpacity>
        <Text style={styles.loginButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  // Back to login button
  goBackButton: {
    position: 'absolute', 
    top: 20, // Position near the top
    left: 20, // Position near the left edge
    padding: 10,
  },
  goBackText: {
    color: 'blue', // Make the text look like a clickable link
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  loginTextContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  signInText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
  },
  viewContainer: {
    borderRadius: 20,
    padding: 10,
    width: '80%',
  },
  inputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    marginBottom: 15,
  },
  loginButton: {
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "blue",
    color: "white",
    marginTop: 20,
    textAlign: "center"
  }
});
