import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ListingScreen({route}) {
  const cardData = route.params;
  return (
    <View>
      <Text>Bye</Text>
      <Text>{cardData.propertyName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
