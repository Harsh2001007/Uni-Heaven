import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import ListingScreen from '../Screens/ListingScreen';

export default function AllScreenHolder() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen component={LoginScreen} name="login-screen" /> */}
        {/* <Stack.Screen component={SignupScreen} name="signup-screen" /> */}
        <Stack.Screen component={HomeScreen} name="home-screen" />
        <Stack.Screen component={ListingScreen} name="listing-screen" />
        <Stack.Screen component={DetailScreen} name="detail-screen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
