import {} from "react-native";
import React from "react";

import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { ClockIcon } from "@/components/ui/icon";
import { Icon } from "@/components/ui/icon";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

interface RoutineData {
  title: string;
  time: string;
  image: string;
}

const RoutineCard: React.FC<RoutineData> = ({ image, title, time }) => {
  return (
    <Box className="flex flex-row justify-between bg-background-50 w-full h-[108px] items-center rounded-[16px] px-[14px] py-3 z-10">
      <VStack className="justify-between h-full w-[40%]">
        <Text className="text-typography-800 text-[16px] leading-[18.75px] tracking-[0.48px] font-[600]">
          {title}
        </Text>
        <HStack className="flex-row  items-center">
          <Icon as={ClockIcon} className="text-typography-500 m-2 w-4 h-4" />
          <Text className="text-typography-500 leading-[21px] text-[14px] font-[400]">{time}</Text>
        </HStack>
      </VStack>

      <Image
        className="h-full w-[148px] rounded-[12px]"
        source={image}
        alt={title}
      />
    </Box>
  );
};

export default RoutineCard;
