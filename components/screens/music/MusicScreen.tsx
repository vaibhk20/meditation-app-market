import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
const MusicScreen = () => {
  
  const data = [
    {
      id: 1,
      col: 1,
      row: 1,
    },
    {
      id: 2,
      col: 2,
      row: 1,
    },
    {
      id: 3,
      col: 3,
      row: 1,
    },
    {
      id: 4,
      col: 4,
      row: 1,
    },
    {
      id: 5,
      col: 5,
      row: 1,
    },
    {
      id: 6,
      col: 1,
      row: 2,
    },
    {
      id: 7,
      col: 2,
      row: 2,
    },
    {
      id: 8,
      col: 3,
      row: 2,
    },
    {
      id: 9,
      col: 4,
      row: 2,
    },
    {
      id: 10,
      col: 5,
      row: 2,
    },
    {
      id: 11,
      col: 1,
      row: 3,
    },
    {
      id: 12,
      col: 2,
      row: 3,
    },
    {
      id: 13,
      col: 3,
      row: 3,
    },
    {
      id: 14,
      col: 4,
      row: 3,
    },
    {
      id: 15,
      col: 5,
      row: 3,
    },
  ];
  const SWIPE_THRESHOLD = 120;
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const prevX = useSharedValue(0);
  const prevY = useSharedValue(0);
  
  const drag = Gesture.Pan()
    .onStart(() => {
      prevX.value = x.value;
      prevY.value = y.value;
     
    })
    .onUpdate((e) => {
        // Update the horizontal position based on drag
        if (e.translationX < -SWIPE_THRESHOLD ) {
          x.value = withSpring(prevX.value - 280); // Scroll left
         
        } else if (e.translationX > SWIPE_THRESHOLD ) {
          x.value = withSpring(prevX.value + 280); // Scroll right
         
        } else {
          x.value = withSpring(prevX.value);
        }
  
        // Update the vertical position based on drag
        if (e.translationY < -SWIPE_THRESHOLD) {
          y.value = withSpring(prevY.value - 280); // Scroll up
         
        } else if (e.translationY > SWIPE_THRESHOLD ) {
          y.value = withSpring(prevY.value + 280); // Scroll down
          
        } else {
          y.value = withSpring(prevY.value);
        }
      });
  
    // Animated style for the grid container

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <GestureHandlerRootView>
      <Box className="flex-1 bg-background-0">
        <GestureDetector gesture={drag}>
          <Animated.View
            style={animatedStyles}
            className="flex-row w-[1480px] gap-4 flex-wrap bg-red-500"
          >
            {data.map((item) => {
              
         

              return (
                <Animated.View
                  key={item.id}
                  className="w-[280px] h-[280px] bg-blue-500"
                
                ></Animated.View>
              );
            })}
          </Animated.View>
        </GestureDetector>
      </Box>
    </GestureHandlerRootView>
  );
};

export default MusicScreen;
