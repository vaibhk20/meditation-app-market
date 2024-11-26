import React from "react";
import { Box } from "@/components/ui/box";
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
    clamp,
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
  const translateX = useSharedValue(0);
  const startTranslateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const startTranslateY = useSharedValue(0);
  const fling = Gesture.Fling()
    .direction(Directions.LEFT | Directions.RIGHT | Directions.UP | Directions.DOWN)
    .onBegin((event) => {
      startTranslateX.value = event.x;
      startTranslateY.value = event.y;
    })
    .onStart((event) => {
      translateX.value = withTiming(
        clamp(
          translateX.value + event.x - startTranslateX.value,
          
       -1400,
       1400
        ),
        { duration: 200 }
      );
      translateY.value = withTiming(
        clamp(
          translateY.value + event.y - startTranslateY.value,
          
       -1400,
       1400
        ),
        { duration: 200 }
      );
    })
    .runOnJS(true);

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureHandlerRootView>
      <Box className="flex-1 bg-background-0">
        <GestureDetector gesture={fling}>
          <Animated.View
            style={boxAnimatedStyles}
            className="flex-row w-[1480px] gap-4 flex-wrap bg-red-500"
          >
            {data.map((item) => (
              <Animated.View
                key={item.id}
                className="w-[280px] h-[280px] bg-blue-500"
              ></Animated.View>
            ))}
          </Animated.View>
        </GestureDetector>
      </Box>
    </GestureHandlerRootView>
  );
};

export default MusicScreen;
