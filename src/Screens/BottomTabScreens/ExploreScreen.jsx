import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExploreBanner from '../../Components/Explore-Screen/ExploreBanner';
import servicesDataArray from '../../constants/servicesData';

export default function ExploreScreen() {
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const serviceRows = chunkArray(servicesDataArray, 2);

  return (
    <View style={styles.wrapper}>
      <ExploreBanner />
      <View style={styles.topServicestext}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Explore Our Top Services
        </Text>
      </View>
      <View style={styles.otherServices}>
        {serviceRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((name, colIndex) => (
              <View key={colIndex} style={styles.card}>
                <Text style={styles.text}>{name}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  topServicestext: {
    marginTop: 30,
  },
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  card: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 2,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,

    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  otherServices: {
    marginTop: 20,
  },
});
