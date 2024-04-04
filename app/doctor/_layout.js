import React from "react";
import { Tabs, useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/Ionicons";

export default function _layout() {
  const user = useLocalSearchParams();
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen
          name="home"
          initialParams={user}
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="home"
                size={24}
                color={focused ? "black" : "#adadad"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          initialParams={user}
          options={{
            title: "Chat",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon3
                name="chatbubble-outline"
                size={24}
                color={focused ? "black" : "#adadad"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          initialParams={user}
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color, size }) => (
              <Icon
                name="user"
                size={24}
                color={focused ? "black" : "#adadad"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
