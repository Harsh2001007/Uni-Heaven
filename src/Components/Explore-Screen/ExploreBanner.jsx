import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

export default function ExploreBanner() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.bannerTexts}>
        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>
          Student Bank Account
        </Text>
        <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>
          Get Instant Approval
        </Text>
        <View style={styles.benefitBtn}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}>
            Get Benefits Now
          </Text>
        </View>
      </View>

      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1299758275/vector/school-or-education-fund-financial-planning-for-kid-school-or-college-budget-and-scholarship.jpg?s=612x612&w=0&k=20&c=JkFGzIxOtKrhf4ErdSEKbUt1R_jbyVKHz_XDlh4RR0g=',
          }}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    borderColor: 'black',
    backgroundColor: '#94B4C1',
    borderRadius: 8,
    elevation: 10,
    flexDirection: 'row',
  },
  bannerTexts: {
    width: '60%',
    height: '100%',
    paddingHorizontal: 10,
  },
  benefitBtn: {
    backgroundColor: 'blue',
    marginTop: 40,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  imgView: {
    width: '40%',
  },
});
