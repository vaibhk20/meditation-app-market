import { Box } from "@/components/ui/box";
import React from "react";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Badge, BadgeIcon, BadgeText } from "@/components/ui/badge";
import { ClockIcon } from "@/components/ui/icon";
import { ImageBackground } from "@/components/ui/image-background";
import { LinearGradient } from "@/components/ui/linear-gradient";
interface ExploreData {
  title: string;
  time?: string;
  image: any;
  description: string;
}
const ExploreCard: React.FC<ExploreData> = ({
  title,
  time,
  image,
  description,
}) => {
  return (
    <LinearGradient
      colors={["rgba(4, 4, 4, 0.0)", "rgba(4, 4, 4, 0.2)", "#040404"]}
      className="w-[48%] h-[217px] relative rounded-[16px] overflow-hidden"
    >
      <ImageBackground
        source={image}
        className="w-full h-full absolute top-0 left-0"
        alt={title}
      >
          <LinearGradient
            colors={["rgba(4, 4, 4, 0.0)", "rgba(4, 4, 4, 0.2)", "#040404"]}
            className="w-full h-full"
          />
        <Box className="absolute bottom-5 left-5 w-[80%]">
        
          <Text className="text-[18px] font-[700] text-typography-800">
            {title}
          </Text>
          <Text className="text-[12px] mt-1 font-[400] text-[#6C7172] leading-[14.4px]">
            {description}
          </Text>
        </Box>
        {time ? (
          <Badge className="absolute rounded-full px-3 py-[6px] bg-background-0/40 top-3 gap-[6px] right-3">
            <BadgeIcon as={ClockIcon} className="text-white w-[13px] " />
            <BadgeText className="text-[14px] text-typography-800 leading-[21px] font-[500] lowercase">
              {time}
            </BadgeText>
          </Badge>
        ) : (
          ""
        )}
      </ImageBackground>
    </LinearGradient>
  );
};

export default ExploreCard;
