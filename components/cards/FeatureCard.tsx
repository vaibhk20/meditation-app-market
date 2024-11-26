import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Badge, BadgeText } from "@/components/ui/badge";
import { Button, ButtonIcon } from "@/components/ui/button";
import React from "react";
import { Play } from "lucide-react-native";
export interface FeatureData {
  title: string;
  tags: string[];
}
const FeatureCard: React.FC<FeatureData> = ({ title, tags }) => {
  return (
    <HStack className="w-full h-[96px] bg-background-800/15 flex-row justify-between rounded-[16px] px-[16px] py-[12px] items-center">
      <VStack className="min-w-[70%] flex-1 h-full flex-col justify-between">
        <Text className="text-background-800 text-[18px] font-[500]">{title}</Text>
        <HStack space="sm">
          {tags.map((text, index) => (
            <Badge
              key={index}
              variant="outline"
              className="rounded-[17px] px-3 py-[6px] border-background-800/15 border-[1px] bg-transparent"
            >
              <BadgeText className="text-background-800 font-medium text-[14px] leading-[21px] lowercase">
                {text}
              </BadgeText>
            </Badge>
          ))}
        </HStack>
      </VStack>
      <Button className="w-[48px] h-[48px] rounded-full bg-primary-500">
        <ButtonIcon as={Play} className="text-background-800" />
      </Button>
    </HStack>
  );
};

export default FeatureCard;
