import { View } from "@/components/ui/view";
import React from "react";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { ClockIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
interface ReleaseData {
  title: string;
  time: string;
  image: string;
}
const ReleaseCard: React.FC<ReleaseData> = ({ title, time, image }) => {
  return (
    <Box className="w-[268px] h-[268px] relative rounded-[16px] ml-[12px] overflow-hidden">
      <Image
        source={image}
        className="w-full h-full absolute top-0 left-0"
        alt={title}
      />
      <Box className="absolute bottom-[12px] left-[12px]">
        <Text className="text-[18px] font-[500] text-typography-600">
          {title}
        </Text>
      </Box>
      <Badge className="absolute rounded-full px-[12px] py-[6px] bg-background-0/40 top-[12px] gap-[6px] right-[12px]">
        <BadgeIcon as={ClockIcon} className="text-typography-600 w-[13px] " />
        <BadgeText className="text-[14px] text-typography-600 leading-[21px] font-[500] lowercase">
          {time}
        </BadgeText>
      </Badge>
    </Box>
  );
};

export default ReleaseCard;
