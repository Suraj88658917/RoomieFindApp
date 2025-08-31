import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function DetailsScreen({ navigation }) {
  const openLink = (url) => {
    Linking.openURL(url).catch(() =>
      alert('Unable to open link. Please try again later.')
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* App Intro Image */}
      <Image
        source={require('../assets/images/image41.png')} // <-- replace with your image path
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.headerRow}>
        <Icon
          name="arrow-back"
          size={24}
          color="#000"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>App Details</Text>
        <Icon name="information-circle-outline" size={24} color="#000" />
      </View>

      {/* App Info Sections */}
      <View style={styles.section}>
        <Text style={styles.label}>App Name</Text>
        <Text style={styles.value}>RoomieFind</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Version</Text>
        <Text style={styles.value}>2.3.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Developer</Text>
        <Text style={styles.value}>Suraj Saini</Text>
      </View>

      {/* Links */}
      <TouchableOpacity style={styles.row} onPress={() => openLink('mailto:support@roomiefind.com')}>
        <Icon name="mail-outline" size={20} color="#333" />
        <Text style={styles.rowText}>Email Support</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => openLink('https://www.roomiefind.com')}>
        <Icon name="globe-outline" size={20} color="#333" />
        <Text style={styles.rowText}>Visit Website</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => openLink('https://www.roomiefind.com/privacy')}>
        <Icon name="lock-closed-outline" size={20} color="#333" />
        <Text style={styles.rowText}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => openLink('https://www.roomiefind.com/terms')}>
        <Icon name="document-outline" size={20} color="#333" />
        <Text style={styles.rowText}>Terms of Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.row} onPress={() => openLink('https://www.roomiefind.com/contact')}>
        <Icon name="chatbubble-outline" size={20} color="#333" />
        <Text style={styles.rowText}>Contact Us</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>RoomieFind © 2025</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,

  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#777',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  rowText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  footer: {
    marginTop: 40,
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
  },
});
