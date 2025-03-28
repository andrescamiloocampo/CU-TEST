import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Films",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="planets"
        options={{
          title: "Planets",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="planet.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="people/index"
        options={{
          title: "People",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="people.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen name="people/character" options={{ href: null }} />
    </Tabs>
  );
}
