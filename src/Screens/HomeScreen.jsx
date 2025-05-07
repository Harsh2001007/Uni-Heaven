import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import PropertyCard from '../Components/PropertyCard';

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.cardView}>
        <PropertyCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 250,
  },
});
