/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import propertyData from '../../constants/propertyData';

export default function HomeScreen() {
  const [enquiryStatus, setEnquiryStatus] = useState({});

  const navigation = useNavigation();

  const seeAllHandler = () => {
    console.log('see all clicked');
  };

  const enquireClick = id => {
    setEnquiryStatus(prev => ({...prev, [id]: 'Enquiring ...'}));

    setTimeout(() => {
      setEnquiryStatus(prev => ({...prev, [id]: 'Enquired ✅'}));
    }, 2000);

    console.log('enquire clicked', id);
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollviewStyles}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => {
            Linking.openURL('https://www.universityliving.com/');
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 18,
              letterSpacing: 6,
            }}>
            Uni-Heaven
          </Text>
        </TouchableOpacity>
        {propertyData.map(item => (
          <TouchableOpacity
            style={styles.cardBody}
            onPress={() => navigation.navigate('detail-screen', item)}>
            <Image
              source={{
                uri: item.imgUrl,
              }}
              style={{
                width: '100%',
                height: '50%',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <View style={styles.offerCardStrip}>
              <Text style={{fontWeight: 'bold'}}>Offer upto $50</Text>
            </View>
            <View style={styles.propertyNameText}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                {item.propertyName}
              </Text>
            </View>
            <View style={styles.propertyNameText}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{fontSize: 15}}>
                {item.address}
              </Text>
            </View>
            <View style={styles.propertyAddText}>
              <Text style={{marginTop: 10}}>{item.distance}</Text>
            </View>
            <View style={styles.amenitiesView}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <View style={styles.amenitiesPill}>
                  <Text>Bike</Text>
                </View>
                <View style={styles.amenitiesPill}>
                  <Text>Sofa</Text>
                </View>
                <View style={styles.amenitiesPill}>
                  <Text>Bed</Text>
                </View>
              </View>

              <TouchableOpacity
                style={styles.seeAllBtn}
                onPress={seeAllHandler}>
                <Text style={{color: 'white'}}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceView}>
              <View>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Start from $100 / week
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.seeAllBtn}
                  onPress={() => enquireClick(item.id)}>
                  <Text style={{color: 'white'}}>
                    {enquiryStatus[item.id] || 'Enquire Now'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollviewStyles: {
    padding: 10,
  },
  header: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
  },
  cardBody: {
    height: 450,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
  },
  offerCardStrip: {
    backgroundColor: '#94B4C1',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  propertyNameText: {paddingHorizontal: 5},
  amenitiesPill: {
    backgroundColor: '#94B4C1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  amenitiesView: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  seeAllBtn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  propertyAddText: {
    paddingHorizontal: 5,
  },
  priceView: {
    backgroundColor: '#94B4C1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
});
