import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const data = [
  { id: '1', title: 'Single Room', image: require('../assets/images/image10.jpg') },
  { id: '2', title: 'Mess', image: require('../assets/images/image11.jpg') },
  { id: '3', title: 'Room Mate', image: require('../assets/images/image12.jpg') },
  { id: '4', title: 'Hostel for Girls', image: require('../assets/images/image13.jpg') },
  { id: '5', title: 'Hostel for Boys', image: require('../assets/images/image14.jpg') },
  { id: '6', title: 'Hostel for Girls & Boys', image: require('../assets/images/image15.jpg') },
  { id: '7', title: '1BHK', image: require('../assets/images/image16.jpg') },
  { id: '8', title: '2BHK', image: require('../assets/images/image17.jpg') },
  { id: '9', title: 'FLAT', image: require('../assets/images/image18.jpg') },
];

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.listContainer}>
        {data.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  listContainer: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    paddingEnd:20
  },
  item: {
    width: 90,
    height: 100,
    backgroundColor: 'white',
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 10,
    paddingVertical: 1,
  },
});

export default MyComponent;
