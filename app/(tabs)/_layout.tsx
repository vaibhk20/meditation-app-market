import React from "react";
import { Tabs } from "expo-router";
import { CustomTabBar } from "@/components/layout/CustomTabBar";
import {
  HomeIcon,
  ExploreIcon,
  MusicIcon,
  JourneyIcon,
  StatsIcon,
} from "@/components/layout/CustomTabBar/icons";

const tabItems = [
  {
    name: "home",
    label: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "explore",
    label: "Explore",
    path: "/explore",
    icon: ExploreIcon,
  },
  {
    name: "music",
    label: "Music",
    path: "/music",
    icon: MusicIcon,
  },
  {
    name: "journey",
    label: "Journey",
    path: "/journey",
    icon: JourneyIcon,
  },
  {
    name: "stats",
    label: "Stats",
    path: "/stats",
    icon: StatsIcon,
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar tabItems={tabItems} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "/",
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
