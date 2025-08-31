import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Details") {
          iconName = focused ? "information-circle" : "information-circle-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#4b7bec",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Details" component={DetailsScreen} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default BottomTab;
