import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carousel from '../components/Carousel'; 
import Services from '../components/Services';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="#5edc1f" barStyle="light-content" />
      <View style={styles.view} />

      {/* Top Headers */}
      <Header />
      <SubHeader />

      {/* Body Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Category />
        <Carousel />
        <Services/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  view: {
    width: '100%',
    height: 50,
    backgroundColor: '#5edc1f',
  },
  scrollContent: {
    padding:1,
  },
});
