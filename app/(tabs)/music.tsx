import MusicPlayer from "@/components/music-player/musicPlayer";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

export default function MusicScreen() {
  return (
    <Box className="flex-1 items-center justify-center">
      <MusicPlayer />
    </Box>
  );
}
