import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

    <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
      <Text style={styles.goBackText}>Back to Login</Text>
    </TouchableOpacity>
      {/* Updated: Removed absolute positioning to use normal layout flow */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Enter Email to Change Password</Text>
      </View>
      {/* TextInput will now appear below the text */}
      <View style={styles.viewContainer}>
        <TextInput style={styles.inputContainer} placeholder="Enter your email" />
      </View>
        <TouchableOpacity>
            <Text style={styles.signUpButton}>Submit</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start', // Ensures content stacks top to bottom
      alignItems: 'center', // Centers content horizontally
      paddingTop: 50, // Adds space from the top
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
    signUpButton: {
      width: 300, // Set a fixed width (in pixels)
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 50,
      backgroundColor: "blue",
      color: "white",
      marginTop: 20,
      textAlign: "center"
    },
    goBackButton: {
      position: 'absolute', 
      top: 20, // Position near the top
      left: 20, // Position near the left edge
      padding: 10,
    },
  });