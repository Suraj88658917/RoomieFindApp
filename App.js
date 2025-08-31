import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./screens/SplashScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BottomTab from "./Navigation1/BottomTab";
import Header from "./components/Header";
import { VoiceProvider } from './context/VoiceContext';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <VoiceProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Home"
          component={BottomTab} // Use the Tab navigator
          options={{ animationEnabled: false }}
        />
        <Stack.Screen name="Header" component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
    </VoiceProvider>
  );
}
