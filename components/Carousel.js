import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Image,
  Animated,
  Text,
} from "react-native";
import React, { useRef, useEffect, useState } from "react";

const { width } = Dimensions.get("window");

export default function Screen1() {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    require("../assets/images/image1.jpg"),
    require("../assets/images/image2.jpg"),
    require("../assets/images/image3.jpg"),
    require("../assets/images/image4.jpg"),
    require("../assets/images/image5.jpg"),
    require("../assets/images/image6.jpg"),
    require("../assets/images/image7.jpg"),
    require("../assets/images/image8.jpg"),
    require("../assets/images/image9.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        scrollIndex.current = (scrollIndex.current + 1) % data.length;
        flatListRef.current.scrollToIndex({
          index: scrollIndex.current,
          animated: true,
        });
        setActiveIndex(scrollIndex.current);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const renderItem = ({ item }) => (
    <Image source={item} style={styles.image} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recommend</Text>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onScroll={onScroll}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          scrollIndex.current = index;
          setActiveIndex(index);
        }}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              activeIndex === i ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    backgroundColor:"white"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 5,
    color:"green"
  },
  image: {
    width: width,
    height: 200,
    borderRadius: 10,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#333",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});
