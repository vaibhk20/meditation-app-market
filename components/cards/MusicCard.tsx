import React from 'react'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { ImageBackground } from "@/components/ui/image-background";
import { LinearGradient } from "@/components/ui/linear-gradient";

// Define the interface for the props
interface MusicCardProps {
  image: any;
  title: string;
  description: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ image, title, description }) => {
  return (
    <LinearGradient
      colors={["rgba(4, 4, 4, 0.0)", "rgba(4, 4, 4, 0.2)", "#040404"]}
      className="w-full h-full relative rounded-[12px] border-outline-800/20 border-[1px] overflow-hidden"
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
          <Text className="text-[18px] font-[700] text-typography-800 tracking-[0.2px]">
            {title}
          </Text>
          <Text className="text-[12px] mt-1 font-[400] text-typography-400 leading-[14.4px]">
            {description}
          </Text>
        </Box>
      </ImageBackground>
    </LinearGradient>
  )
}

export default MusicCard