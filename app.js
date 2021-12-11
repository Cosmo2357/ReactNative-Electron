import React, { useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "./screen/Home";
import Profile from "./screen/Profile";
import Login from "./screen/Login";
import Camera from "./screen/Camera";
import AllPosts from "./screen/AllPosts";
import KeyboardScreen from "./screen/Keyboard";
import { Ionicons } from "@expo/vector-icons";

import { PostsProvider } from "./context/postsContext";
import { BadgeProvider } from "./context/badgeContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="Main"
        component={Home}
        options={{ tabBarLabel: "Home" }}
      />
      <TopTab.Screen
        name="AllPosts"
        component={AllPosts}
        options={{ tabBarLabel: "AllPosts" }}
      />
      <TopTab.Screen
        name="Keyboard"
        component={KeyboardScreen}
        options={{ tabBarLabel: "Keyboard" }}
      />
    </TopTab.Navigator>
  );
}
function App() {
  const [homeBadge, setHomeBadge] = useState(99);
  return (
    <PostsProvider>
      <BadgeProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                } else if (route.name === "Login") {
                  iconName = focused ? "camera" : "camera-outline";
                }
                return <Ionicons name={iconName} size={size} color={"black"} />;
              },
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ tabBarBadge: homeBadge }}
            />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Login" component={Login} />
          </Tab.Navigator>
        </NavigationContainer>
      </BadgeProvider>
    </PostsProvider>
  );
}

export default App;
