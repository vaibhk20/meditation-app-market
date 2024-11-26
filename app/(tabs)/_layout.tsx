import React from "react";
import { Tabs } from "expo-router";
import { CustomTabBar } from "@/components/CustomTabBar";

const tabItems = [
  { name: "home", label: "Home", icon: "home-outline", activeIcon: "home" },
  {
    name: "explore",
    label: "Explore",
    icon: "search-outline",
    activeIcon: "search",
  },
  {
    name: "music",
    label: "Music",
    icon: "add-circle-outline",
    activeIcon: "add-circle",
  },
  {
    name: "journey",
    label: "Journey",
    icon: "book-outline",
    activeIcon: "book",
  },
  {
    name: "stats",
    label: "Stats",
    icon: "pie-chart-outline",
    activeIcon: "pie-chart",
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "shift",
      }}
      tabBar={(props) => <CustomTabBar tabItems={tabItems} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: "Music",
        }}
      />
      <Tabs.Screen
        name="journey"
        options={{
          title: "Journey",
          // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
        }}
      />
    </Tabs>
  );
}
