import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import SignUp from './SignUp'

const Login = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Replace 'SignUp' with the actual name of your sign-up screen
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); // Replace 'SignUp' with the actual name of your sign-up screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/LoginImage.jpg')} style={styles.loginImage}></Image>
      </View>
      {/* Updated: Removed absolute positioning to use normal layout flow */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Carousel</Text>
        <Text style={styles.signInText}>Login to Carousel</Text>
      </View>
      {/* TextInput will now appear below the text */}
      <View style={styles.viewContainer}>
        <TextInput style={styles.inputContainer} placeholder="Enter your email" />
        <TextInput style={styles.inputContainer} secureTextEntry={true} placeholder="Enter your password" />
      </View>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text>Forgot your Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpButton}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Ensures content stacks top to bottom
    alignItems: 'center', // Centers content horizontally
    paddingTop: 50, // Adds space from the top
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adds space below the image
  },
  loginImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  loginTextContainer: {
    alignItems: 'center',
    marginBottom: 20, // Adds space between the text and the TextInput
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
    width: '80%', // Ensures the input takes up most of the width
  },
  inputContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray', // To make input visible
    marginBottom: 15, // Adds space between each input field
  },
  loginButton: {
      width: 300, // Set a fixed width (in pixels)
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 50,
      backgroundColor: "blue",
      color: "white",
      marginTop: 20,
      textAlign: "center"
  },
  signUpButton: {
    width: 300, // Set a fixed width (in pixels)
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "red",
    color: "white",
    marginTop: 20,
    textAlign: "center"
  }
});

