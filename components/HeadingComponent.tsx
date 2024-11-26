import React from 'react'
import {View } from './ui/view'
import { Text } from './ui/text'
import { Heading } from './ui/heading'
import { HStack } from '@/components/ui/hstack';
interface HeadingComponentProps {
  heading: string;
  showSeeAll?: boolean;
}

const HeadingComponent: React.FC<HeadingComponentProps> = ({ heading, showSeeAll = true }) => {
  return (
    <HStack className="flex-row items-center justify-between w-full">
      <Heading className="text-typography-800 text-[20px] font-[600]">{heading}</Heading>
      {showSeeAll && (
        <Text className="text-typography-500 text-[16px] leading-[18.75px] font-400">See All</Text>
      )}
    </HStack>
  )
}

export default HeadingComponent
