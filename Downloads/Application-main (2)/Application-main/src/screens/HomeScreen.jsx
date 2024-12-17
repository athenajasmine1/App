import React from 'react';
import { View, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout'; // Import MainLayout

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <ToDoForm />
      <ToDoList />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

export default HomeScreen;

