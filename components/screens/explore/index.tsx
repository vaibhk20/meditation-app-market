import React from "react";
import { View } from "@/components/ui/view";
import ExploreCard from "@/components/cards/ExploreCard";
import { Button, ButtonText } from "../../ui/button";
import { Icon, SearchIcon } from "../../ui/icon";
import Header from "../../Header";
import { Input, InputIcon, InputSlot, InputField } from "../../ui/input";
import { ScrollView } from "../../ui/scroll-view";
import { Box } from "../../ui/box";
import { HStack } from "@/components/ui/hstack";
interface Tag {
  id: number;
  label: string;
}
interface ExploreData {
  title: string;
  time?: string;
  image: any;
  description: string;
  id: string;
}
const Explore = () => {
  const exploreData: ExploreData[] = [
    {
      title: "Morning Run",
      description: "Guided breathing exercises for stress relief",
      time: "15 mins",
      image: require("@/assets/images/affirmations.jpeg"),
      id: "1",
    },
    {
      title: "Morning Routine",
      description: "Morning breathing exercises",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "2",
    },
    {
      title: "Before Coffee",
      description: "Guided breathing exercises for stress relief",
      time: "5 mins",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "3",
    },
    {
      title: "Start Fresh",
      description: "Guided breathing exercises for stress relief",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "4",
    },
    {
      title: "Affirmations",
      description: "Guided breathing exercises for stress relief",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "5",
    },
    {
      title: "Daily Manifestation",
      description: "Guided breathing exercises for stress relief",
      time: "8 mins",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "6",
    },
    {
      title: "Evening Relaxation",
      description: "Relax and unwind after a long day",
      time: "10 mins",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "7",
    },
    {
      title: "Focus Booster",
      description: "A quick breathing exercise to regain focus",
      time: "3 mins",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "8",
    },
    {
      title: "Mindful Moments",
      description: "Pause and connect with your inner self",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "9",
    },
    {
      title: "Stress Relief",
      description: "Let go of tension with guided breathing",
      time: "12 mins",
      image: require("@/assets/images/morningRun.jpeg"),
      id: "10",
    },
  ];
  const tags: Tag[] = [
    { id: 1, label: "Focus" },
    { id: 2, label: "Relaxation" },
    { id: 3, label: "Mindfulness" },
    { id: 4, label: "Clarity" },
    { id: 5, label: "Balance" },
    { id: 6, label: "Energy" },
    { id: 7, label: "Morning Ritual" },
    { id: 8, label: "Daily Productivity" },
    { id: 9, label: "Calmness" },
    { id: 10, label: "Inner Peace" },
  ];

  return (
    <Box className="flex-1 bg-background-0 pt-[7vh] w-full">
      <Box className="aling-center justify-center">
        <Header title="Explore" />
        <Input className="bg-[#1C1F23] border-0 rounded-full mt-[16px] h-[40px] px-[12px] mx-[21px]">
          <InputSlot>
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField className="" placeholder="Search" />
        </Input>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="w-full">
          <HStack className="flex-row mt-5 gap-2">
            {tags.map((tag) => (
              <Button key={tag.id} size="md" className="py-2 rounded-full border-[1px] border-background-800/15 px-3"  variant="outline">
                <ButtonText className="text-4 text-typography-800 font-[400] leading-[18.75px] ">
                  {tag.label}
                </ButtonText>
              </Button>
            ))}
          </HStack>
        </ScrollView>
      </Box>
      <ScrollView className="w-full mt-[12px] showsVerticalScrollIndicator={false} bg-[#121212]">
        <Box className="w-full px-5 gap-4 flex-row flex-wrap py-[30px]">
          {exploreData.map((explore) => (
            <ExploreCard
              key={explore.id}
              title={explore.title}
              description={explore.description}
              image={explore.image}
              {...(explore.time && { time: explore.time })} // Spread `time` only if it exists
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Explore;
