import React, { useContext, useEffect } from 'react';
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView, // ✅ import SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { VoiceContext } from '../context/VoiceContext';

const Header = () => {
  const navigation = useNavigation();
  const { voiceText, setVoiceText } = useContext(VoiceContext);

  useEffect(() => {
    if (voiceText) {
      console.log('Triggering search for:', voiceText);
      handleSearch(voiceText);
    }
  }, [voiceText]);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  return (
    <SafeAreaView style={styles.safeArea}> 
      <View style={styles.container}>
        {/* Profile Icon */}
        <TouchableOpacity style={styles.leftSection}>
          <Image
            style={styles.profileImage}
            source={require('../assets/images/image28.jpg')}
          />
        </TouchableOpacity>

        {/* Search Input with Voice Result */}
        <View style={styles.middleSection}>
          <View style={styles.searchContainer}>
            <Image
              style={styles.searchIcon}
              source={require('../assets/images/image29.jpg')}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search or ask a question"
              placeholderTextColor="gray"
              value={voiceText}
              onChangeText={setVoiceText}
            />
            <TouchableOpacity onPress={() => navigation.navigate('MicScreen')}>
              <Image
                style={styles.micIcon}
                source={require('../assets/images/image30.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* QR Icon */}
        <TouchableOpacity
          style={styles.rightSection}
          onPress={() => navigation.navigate('QRScanner')}>
          <Image
            style={styles.icon}
            source={require('../assets/images/image31.jpg')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#e3c9c9ff', // ✅ match header background
  },
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#5edc1f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middleSection: {
    flex: 5,
    justifyContent: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    marginRight: 1,
  },
  micIcon: {
    width: 19,
    height: 19,
    marginLeft: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
