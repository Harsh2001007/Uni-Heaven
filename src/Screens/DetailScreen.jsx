/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function DetailScreen({route}) {
  const propertyData = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageView}>
          <Image
            source={{uri: propertyData.imgUrl}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.roomStart}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Rooms starting from $100 / week
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>4*</Text>
        </View>
        <View style={styles.addressView}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {propertyData.propertyName}
          </Text>
          <Text style={{color: 'grey', marginTop: 5}}>
            {propertyData.address}
          </Text>
          <Text style={{marginTop: 10, fontSize: 16}}>
            {propertyData.distance}
          </Text>
        </View>
        <View style={styles.uniSelectView}>
          <TouchableOpacity style={styles.uniSelection}>
            <Text style={{fontSize: 16}}>Choose University</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.offerView}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Offers</Text>
          <View style={styles.offersSection}>
            <Text style={{fontWeight: 'bold'}}>
              {propertyData?.offers?.offer1?.offerText}
            </Text>
            <Text style={{fontWeight: 'bold'}}>
              {propertyData?.offers?.offer2?.offerText}
            </Text>
          </View>
        </View>
        <View style={styles.amenitiesSection}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            What this property is offering
          </Text>
          <View>
            <Text style={{fontSize: 16, color: 'grey', marginTop: 10}}>
              Ametities
            </Text>
            <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
              {propertyData.amenities.map(item => (
                <View style={styles.amenitiesPill}>
                  <Text key={item}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text style={{fontSize: 16, color: 'grey', marginTop: 10}}>
              Bills
            </Text>
            <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
              {propertyData.bills.map(item => (
                <View style={styles.amenitiesPill}>
                  <Text key={item}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.roomHeading}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Rooms Available at Property
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  imageView: {
    width: '100%',
    height: 350,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  roomStart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#94B4C1',
    paddingVertical: 10,
  },
  addressView: {
    paddingHorizontal: 10,
  },
  uniSelectView: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  uniSelection: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  offerView: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  offersSection: {
    gap: 5,
    marginTop: 5,
  },
  amenitiesSection: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  amenitiesPill: {
    backgroundColor: '#94B4C1',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  amenitiesHolder: {
    flexDirection: 'row',
  },
  roomHeading: {
    marginTop: 15,
    backgroundColor: '#27548A',
    paddingVertical: 10,
    borderRadius: 8,
  },
  wrapper: {
    marginBottom: 50,
  },
});
