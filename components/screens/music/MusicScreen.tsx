import React, { useState } from "react";
import { Box } from "@/components/ui/box";
import { useWindowDimensions } from "react-native";
import {
  GestureDetector,
  GestureHandlerRootView,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import MusicCard from "@/components/cards/MusicCard";
const MusicScreen = () => {
  const { width: width, height: height } = useWindowDimensions();
  const paddingTop = height / 2 - 391 / 2;
  const paddingLeft = width / 2 - 280 / 2;

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
  const [col, setCol] = useState(3);
  const [row, setRow] = useState(2);
  const drag = Gesture.Pan()
    .onStart(() => {
      prevX.value = x.value;
      prevY.value = y.value;
    })
    .onUpdate((e) => {
      // Update the horizontal position based on drag
      if (e.translationX < -SWIPE_THRESHOLD && col < 5) {
        x.value = withTiming(prevX.value - 280 - 8, { duration: 300 }); // Scroll left
      } else if (e.translationX > SWIPE_THRESHOLD && col > 1) {
        x.value = withTiming(prevX.value + 280 + 8, { duration: 300 }); // Scroll right
      } else {
        x.value = withTiming(prevX.value, { duration: 300 });
      }

      // Update the vertical position based on drag
      if (e.translationY < -SWIPE_THRESHOLD && row < 3) {
        y.value = withTiming(prevY.value - 391 - 8, { duration: 300 }); // Scroll up
      } else if (e.translationY > SWIPE_THRESHOLD && row > 1) {
        y.value = withTiming(prevY.value + 391 + 8, { duration: 300 }); // Scroll down
      } else {
        y.value = withTiming(prevY.value, { duration: 300 });
      }
    })
    .onEnd(() => {
      if (prevX.value > x.value) {
        runOnJS(setCol)(col + 1);
      } else if (prevX.value < x.value) {
        runOnJS(setCol)(col - 1);
      }

      if (prevY.value > y.value) {
        runOnJS(setRow)(row + 1);
      } else if (prevY.value < y.value) {
        runOnJS(setRow)(row - 1);
      }
    });

  // Animated style for the grid container

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <GestureHandlerRootView>
      <Box className="flex-1 bg-[#13171C] items-center justify-center">
        <GestureDetector gesture={drag}>
          <Animated.View
            style={[
              animatedStyles,
              //   { marginTop: paddingTop, marginLeft: paddingLeft },
            ]}
            className="flex-row w-[1480px] gap-4 flex-wrap bg-background-[#13171C]"
          >
            {data.map((item) => {
              const animatedItemStyle = useAnimatedStyle(() => {
                return {
                  opacity: withTiming(
                    item.col === col && item.row === row ? 1 : 0.2,
                    { duration: 300 }
                  ),
                };
              });

              return (
                <Animated.View
                  key={item.id}
                  className="w-[280px] h-[391px] "
                  style={animatedItemStyle}
                >
                  <MusicCard
                    title="Waterfall"
                    description="Gentle cascades for serene moments"
                    image={require("@/assets/images/splach.png")}
                  />
                </Animated.View>
              );
            })}
          </Animated.View>
        </GestureDetector>
      </Box>
    </GestureHandlerRootView>
  );
};

export default MusicScreen;
