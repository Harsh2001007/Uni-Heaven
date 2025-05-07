import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();

export default function LoginScreen() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
