import { View } from "./ui/view";
import React from "react";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
const lotus = require("@/assets/images/lotus.png");

type HeaderProps = {
  title?: string; // Marking title as optional
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View className="w-full items-center justify-center">
      <Image source={lotus} className="w-[45px] h-[38px]" alt="logo" />
      {title && ( 
        <Text className="text-[20px] text-[#E5E5E5] font-[700] tracking-[0.2px] leading-[23.54px]">
          {title}
        </Text>
      )}
    </View>
  );
};

export default Header;
