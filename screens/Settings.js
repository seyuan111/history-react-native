import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const navigation = useNavigation();

  const toggleDarkModeSwitch = () => setIsDarkModeEnabled(previousState => !previousState);
  const toggleNotificationsSwitch = () => setIsNotificationsEnabled(previousState => !previousState);

  const handleAccountPress = () => {
    navigation.navigate('AccountSettings');
  };

  // Conditionally set styles based on the current mode (dark or light)
  const currentStyles = isDarkModeEnabled ? darkStyles : lightStyles;

  return (
    <ScrollView style={currentStyles.container}>

      {/* General Settings */}
      <View style={currentStyles.section}>
        <Text style={currentStyles.sectionTitle}>General</Text>

        {/* Theme Switch */}
        <View style={currentStyles.option}>
          <Text style={currentStyles.optionText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleDarkModeSwitch}
            value={isDarkModeEnabled}
          />
        </View>

        {/* Account */}
        <TouchableOpacity style={currentStyles.option} onPress={handleAccountPress}>
          <Text style={currentStyles.optionText}>Account Settings</Text>
          <Icon name="chevron-forward-outline" size={20} color={isDarkModeEnabled ? "#fff" : "#000"} />
        </TouchableOpacity>
      </View>

      {/* Notifications Settings */}
      <View style={currentStyles.section}>
        <Text style={currentStyles.sectionTitle}>Notifications</Text>

        <View style={currentStyles.option}>
          <Text style={currentStyles.optionText}>Push Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleNotificationsSwitch}
            value={isNotificationsEnabled}
          />
        </View>
      </View>

      {/* More settings can be added below */}
    </ScrollView>
  );
};

export default Settings;

// Light theme styles
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

// Dark theme styles
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    padding: 16,
    backgroundColor: '#444',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ccc',
    marginBottom: 8,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
  },
  optionText: {
    fontSize: 16,
    color: '#ccc',
  },
});
