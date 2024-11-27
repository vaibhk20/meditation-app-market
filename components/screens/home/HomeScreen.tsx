import Header from "@/components/Header";
import ScreenLayout from "@/components/layout/ScreenLayout";
import { ScrollView } from "@/components/ui/scroll-view";
import { VStack } from "@/components/ui/vstack";
import RoutineCard from "@/components/cards/RoutineCard";
import { Image } from "@/components/ui/image";
import { CheckIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import HeadingComponent from "@/components/HeadingComponent";
import FeatureCard from "@/components/cards/FeatureCard";
import { ImageBackground } from "@/components/ui/image-background";
import { HStack } from "@/components/ui/hstack";
import ReleaseCard from "@/components/cards/ReleaseCard";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

interface RoutineData {
  id: number;
  title: string;
  time: string;
  image: any;
}

interface FeatureData {
  id: number;
  title: string;
  tags: string[];
}

interface ReleaseData {
  id: number;
  title: string;
  time: string;
  image: any;
}

const HomeScreen = () => {
  const lineImageUrl = require("@/assets/images/Line.png");
  const featureData: FeatureData[] = [
    {
      id: 1,
      title: "Affirmations to start your day",
      tags: ["15 min", "Evening", "relax"],
    },
    {
      id: 2,
      title: "A daily mindfulness practice",
      tags: ["20 min", "nature"],
    },
  ];

  const data: RoutineData[] = [
    {
      id: 1,
      title: "The Morning Routine",
      time: "10 mins",
      image: require("@/assets/images/morningRoutine.jpeg"),
    },
    {
      id: 2,
      title: "Evening walk by the lake",
      time: "15 mins",
      image: require("@/assets/images/eveningWalk.jpeg"),
    },
    {
      id: 3,
      title: "Night-time Routine",
      time: "15 mins",
      image: require("@/assets/images/nightTime.jpeg"),
    },
  ];

  const releaseData: ReleaseData[] = [
    {
      id: 1,
      title: "Mindful Meditation",
      time: "15 mins",
      image: require("@/assets/images/mindfulMeditation.jpeg"),
    },
    {
      id: 2,
      title: "Worry Free Day",
      time: "20 mins",
      image: require("@/assets/images/worryFreeDay.jpeg"),
    },
  ];

  return (
    <ScrollView
      className="bg-background-50"
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("@/assets/images/background.jpeg")}
        alt="background"
        className="w-full h-fit"
      >
        <Box className="w-full h-full absolute top-0 left-0 bg-background-50 opacity-60  z-[5]"></Box>
        <VStack className="z-[10] pt-[20px]">
          <Header />
          <Heading className="text-typography-800 mx-5 mt-[60px] text-[30px] leading-[35.15px] tracking-[0.2px] font-[700]">
            Good Morning, John!
          </Heading>
          <Text className="text-typography-600 mx-5 text-[20px] mt-[10px] leading-[23.44px] font-[400]">
            Let’s get you started with the day
          </Text>
          <VStack space="md" className="px-5 mt-[56px]">
            {data.map((item, index) => (
              <Checkbox
                key={item.id}
                value="checked"
                size="md"
                isInvalid={false}
                isDisabled={false}
                className="w-full h-[108px] relative"
              >
                {index !== data.length - 1 && (
                  <Image
                    source={lineImageUrl}
                    className="absolute z-10 left-[8px] h-[106px] w-[1px] top-[60px] bottom-0"
                  />
                )}
                <CheckboxIndicator className="w-[16px]  rounded-full h-[16px]">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel className="flex-1 pl-[14px]">
                  <RoutineCard
                    title={item.title}
                    time={item.time}
                    image={item.image}
                  />
                </CheckboxLabel>
              </Checkbox>
            ))}
          </VStack>
          <Box className="px-5 mt-[42px]">
            <HeadingComponent heading="Featured for you" showSeeAll={true} />
          </Box>
          <VStack space="md" className="px-5 mb-[12px] mt-[18px]">
            {featureData.map((item) => (
              <FeatureCard key={item.id} title={item.title} tags={item.tags} />
            ))}
          </VStack>
        </VStack>
      </ImageBackground>
      <Box className="px-[20px] mt-[34px]">
        <HeadingComponent heading="New releases" showSeeAll={true} />
      </Box>
      <HStack space="md" className="my-[18px]">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {releaseData.map((item) => (
            <ReleaseCard
              key={item.id}
              title={item.title}
              time={item.time}
              image={item.image}
            />
          ))}
        </ScrollView>
      </HStack>
    </ScrollView>
  );
};

export default HomeScreen;

//   return (
//     <View className="w-full mt-[40px]">
//       <Text className="text-white text-[30px] leading-[35.15px] tracking-[0.2px] font-[700]">
//         Good Morning, John!
//       </Text>
//       <Text className="text-[#A3A3A3] text-[20px] mt-[10px] leading-[23.44px] font-medium">
//         Let’s get you started with the day
//       </Text>

//     </View>
//   );
// };

// export default RoutineList;
