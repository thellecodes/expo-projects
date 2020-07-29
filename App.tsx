import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { LoadAssets } from "./components";
import { Home } from "./components/Tabs/FirstAnimation";

const LandingStack = createStackNavigator();

const fonts = {
  "Cabin-Bold": require("./src/fonts/Cabin-Bold.ttf"),
  "Cabin-BoldItalic": require("./src/fonts/Cabin-BoldItalic.ttf"),
  "Cabin-Regular": require("./src/fonts/Cabin-Regular.ttf"),
};

const AuthenticationNavigator = () => (
  <LandingStack.Navigator headerMode="none">
    <LandingStack.Screen name="Home" component={Home} />
  </LandingStack.Navigator>
);

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}
