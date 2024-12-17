import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Import MainLayout

const AboutScreen = () => {
  const showEasterEgg = () => {
    Alert.alert('Surprise!', 'You found the Easter egg!');
  };

  return (
    <MainLayout>
      <View>
        <Text style={styles.title}>About This App</Text>
        <TouchableOpacity onPress={showEasterEgg}>
          <Text style={styles.name}>Created by: Athena Jasmine</Text>
        </TouchableOpacity>
        <Text style={styles.date}>Date: {new Date().toDateString()}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
  date: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default AboutScreen;

