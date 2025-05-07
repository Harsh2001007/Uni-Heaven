import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function PropertyCard() {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/036/069/331/large_2x/ai-generated-japanese-classic-style-house-design-photo.jpg',
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={styles.cardOfferBody}>
        <Text>Refer and earn $50</Text>
      </View>
      <View style={styles.propNameView}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Otaka Student Exchange
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          742 Evergreen Terrace, Near Krusty Burger, Springfield, State of
          Confusion, ZIP 12345, USA (Home of The Simpsons)
        </Text>
        <Text style={{marginTop: 10}}>8.90 miles away from the town hall</Text>
      </View>
      <View style={styles.amenitiesView}>
        <View style={styles.amenitiesPill}>
          <Text>Sword</Text>
        </View>
        <View style={styles.amenitiesPill}>
          <Text>Sword</Text>
        </View>
        <View style={styles.amenitiesPill}>
          <Text>Sword</Text>
        </View>
        <View style={styles.amenitiesPill}>
          <Text>Sword</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: '100%',
  },
  cardOfferBody: {
    backgroundColor: '#B2C6D5',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  propNameView: {
    marginTop: 10,
  },
  amenitiesPill: {
    backgroundColor: '#94B4C1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  amenitiesView: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
});
