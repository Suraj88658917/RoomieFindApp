import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Animated,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const AUTOPLAY_INTERVAL = 2000;

const Services = () => {
  const navigation = useNavigation();

  const handleAppOpen = async (app) => {
    let url = '';
    let fallbackMessage = '';

    switch (app) {
      case 'GooglePay':
        url = 'gpay://';
        fallbackMessage = 'Google Pay is not installed on this device.';
        break;
      case 'PhonePe':
        url = 'phonepe://';
        fallbackMessage = 'PhonePe is not installed on this device.';
        break;
      case 'PayTm':
        url = 'paytmmp://';
        fallbackMessage = 'PayTm is not installed on this device.';
        break;
      case 'Scanner':
        navigation.navigate('SearchMicScreen');
        return;
      default:
        Alert.alert('App not found or not supported.');
        return;
    }

    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('App not installed', fallbackMessage);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Left Side */}
      <View style={styles.servicesContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.container}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.grid}>
            {/* Top Row */}
            <View style={styles.row}>
              <ServiceItem
                imageUri="https://static.vecteezy.com/system/resources/thumbnails/046/861/640/small_2x/google-pay-logo-transparent-background-free-png.png"
                text="Google Pay"
                onPress={() => handleAppOpen('GooglePay')}
              />
              <ServiceItem
                imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGflV1ssNEdkzIRwiNtOvgVpj1Ek5hi32lg&s"
                text="PhonePe"
                onPress={() => handleAppOpen('PhonePe')}
              />
            </View>
            {/* Bottom Row */}
            <View style={styles.row}>
              <ServiceItem
                imageUri="https://static.vecteezy.com/system/resources/previews/020/272/022/non_2x/qr-code-scanner-line-icon-scan-qrcode-color-linear-pictogram-technology-application-for-identification-product-outline-symbol-information-label-editable-stroke-isolated-illustration-vector.jpg"
                text="Scan QR"
                onPress={() => handleAppOpen('Scanner')}
              />
              <ServiceItem
                imageUri="https://images.icon-icons.com/730/PNG/512/paytm_icon-icons.com_62778.png"
                text="PayTm"
                onPress={() => handleAppOpen('PayTm')}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Right Side */}
      <Screen1 />
    </View>
  );
};

const ServiceItem = ({ imageUri, text, onPress }) => (
  <TouchableOpacity style={styles.serviceItem} onPress={onPress}>
    <Image style={styles.image} source={{ uri: imageUri }} />
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const Screen1 = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    require('../assets/images/image19.jpg'),
    require('../assets/images/image20.jpg'),
    require('../assets/images/image21.jpg'),
    require('../assets/images/image22.jpg'),
    require('../assets/images/image23.jpg'),
    require('../assets/images/image24.jpg'),
    require('../assets/images/image25.jpg'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % data.length;
      setActiveIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.sliderWrapper}>
        <FlatList
          ref={flatListRef}
          data={data}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image
                source={item}
                style={styles.sliderImage}
                resizeMode="cover"
              />
            </View>
          )}
          style={{ height: 200 }}
        />
      </View>
      <Text style={styles.carouselText}>Near by University</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    backgroundColor: "#f8f4ff",
  },
  servicesContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  container: {
    padding: 10,
    backgroundColor: "#f8f4ff",
    height: 190,
    borderRadius: 30,
  },
  grid: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  serviceItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  text: {
    marginTop: 5,
  },
  carouselContainer: {
    flex: 1,
    backgroundColor: "#dbe9f4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 10,
  },
  sliderWrapper: {
    width: 265,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  slide: {
    width: 210,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: -15,
  },
  sliderImage: {
    width: 140,
    height: 150,
    borderRadius: 10,
  },
  carouselText: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default Services;
