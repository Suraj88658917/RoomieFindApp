import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SubHeader = () => {
  const [locationName, setLocationName] = useState("Set Location");

  const handlePress = () => {
    // 🔹 Example: just toggle text since location is removed
    setLocationName((prev) =>
      prev === "Set Location" ? "My City" : "Set Location"
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
        <Icon name="location-outline" size={20} color="#000000ff" />
      </TouchableOpacity>

      <Text style={styles.text}>
        {locationName === "Set Location"
          ? "Comfortable & Affordable Rental Rooms"
          : `${locationName} • Rental Rooms`}
      </Text>

      <TouchableOpacity onPress={handlePress} style={styles.iconButton}>
        <Icon name="arrow-forward-circle-outline" size={20} color="#000000ff" />
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#5edc1f", // ✅ solid background instead of gradient
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 10,
    flex: 1,
    textAlign: "center",
  },
  iconButton: {
    padding: 5,
    
  },
});
