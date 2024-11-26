import React, { useState, useEffect } from "react";
import { View } from "@/components/ui/view";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { ImageBackground } from "@/components/ui/image-background";
import Slider from "@react-native-community/slider";
import { Audio } from "expo-av";
import { VStack } from "../ui/vstack";
import PlayIcon  from "@/assets/svg/play-icon.svg";
import PauseIcon from "@/assets/svg/pause-icon.svg";
import ForwardIcon from "@/assets/svg/fast-forward-icon.svg";
import RewindIcon from "@/assets/svg/rewind-icon.svg";
import ShuffleIcon from "@/assets/svg/shuffle-icon.svg";
import LoopIcon from "@/assets/svg/loop-icon.svg";
import { LinearGradient } from "@/components/ui/linear-gradient";

const MusicImage = require("@/assets/images/morning-run-background.png");
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const tracks = [
    {
      id: 1,
      title: "Morning Run",
      subtitle: "Guided breathing exercises for stress relief",
      audio: require("@/assets/audio/morning-run.mp3"),
    },
    // Add more tracks here
  ];

  // Load Audio
  const loadAudio = async (audioSource = tracks[currentTrackIndex].audio) => {
    const { sound } = await Audio.Sound.createAsync(audioSource);
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.isLoaded) {
        setDuration(status.durationMillis || 0);
        setPosition(status.positionMillis || 0);
        
        // Handle track ending
        if (status.didJustFinish && !status.isLooping) {
          playNextTrack();
        }
      }
    });
  };

  useEffect(() => {
    loadAudio();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, []);

  const togglePlayPause = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const onSlidingComplete = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  const toggleLoop = async () => {
    if (sound) {
      const newLoopingState = !isLooping;
      await sound.setIsLoopingAsync(newLoopingState);
      setIsLooping(newLoopingState);
    }
  };

  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const playNextTrack = async () => {
    if (tracks.length <= 1) return;
    
    let nextIndex;
    if (isShuffling) {
      // Get random index excluding current
      do {
        nextIndex = Math.floor(Math.random() * tracks.length);
      } while (nextIndex === currentTrackIndex);
    } else {
      nextIndex = (currentTrackIndex + 1) % tracks.length;
    }
    
    // Unload current track
    if (sound) {
      await sound.unloadAsync();
    }
    
    setCurrentTrackIndex(nextIndex);
    loadAudio(tracks[nextIndex].audio);
  };

  const playPreviousTrack = async () => {
    if (tracks.length <= 1) return;
    
    let prevIndex;
    if (isShuffling) {
      // Get random index excluding current
      do {
        prevIndex = Math.floor(Math.random() * tracks.length);
      } while (prevIndex === currentTrackIndex);
    } else {
      prevIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    }
    
    // Unload current track
    if (sound) {
      await sound.unloadAsync();
    }
    
    setCurrentTrackIndex(prevIndex);
    loadAudio(tracks[prevIndex].audio);
  };

  return (
    <VStack className="flex-1 h-full">
      {/* Top Section with Background */}
      <LinearGradient colors={['#13171C', '#13171C']}>
      <View className="flex-1">
        <ImageBackground
          source={MusicImage}
          className="flex-1 justify-start items-center bg-cover"
        >
          
          {/* Toggle Buttons */}
          <View className="flex-row mb-5 mt-4">
            <Text className="px-4 py-2 text-white bg-black rounded-full mx-1">Song</Text>
            <Text className="px-4 py-2 text-white bg-gray-800 rounded-full mx-1">Video</Text>
          </View>
          
          {/* Add this gradient overlay at the bottom of the image */}
          <LinearGradient
            colors={['transparent', '#13171C']}
            className="absolute bottom-0 left-0 right-0 h-32"
          />
        </ImageBackground>
        
      </View>
      
      {/* Bottom Section with Controls */}
      <View className="px-5 items-center pb-8">
        {/* Song Details */}
        <Text className="text-2xl text-white font-bold mb-2">Morning Run</Text>
        <Text className="text-sm text-white mb-5">
          Guided breathing exercises for stress relief
        </Text>

        {/* Slider */}
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="#6DC7F8"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#6DC7F8"
          onSlidingComplete={onSlidingComplete}
        />

        {/* Time Display */}
        <View className="flex-row justify-between w-full mt-1">
          <Text className="text-white text-xs">{(position / 1000).toFixed(2)}</Text>
          <Text className="text-white text-xs">{(duration / 1000).toFixed(2)}</Text>
        </View>

        {/* Controls */}
        <View className="flex-row justify-around items-center w-[90%] mt-5">
          <Pressable onPress={toggleShuffle}>
            <ShuffleIcon 
              width={24} 
              height={24} 
              fill={isShuffling ? "#6DC7F8" : "#FFFFFF"}
            />
          </Pressable>
          <Pressable onPress={playPreviousTrack}>
            <RewindIcon width={24} height={24} />
          </Pressable>
          <Pressable onPress={togglePlayPause}>
            {isPlaying ? 
              <PauseIcon width={44} height={44} /> : 
              <PlayIcon width={44} height={44} />
            }
          </Pressable>
          <Pressable onPress={playNextTrack}>
            <ForwardIcon width={24} height={24} />
          </Pressable>
          <Pressable onPress={toggleLoop}>
            <LoopIcon 
              width={24} 
              height={24} 
              fill={isLooping ? "#6DC7F8" : "#FFFFFF"}
              color={isLooping ? "#6DC7F8" : "#FFFFFF"}
            />
          </Pressable>
        </View>
      </View>
      </LinearGradient>
    </VStack>
  );
};

export default MusicPlayer;
