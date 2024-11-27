import ScreenLayout from "@/components/layout/ScreenLayout";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StatsScreen() {
  return (
    <ScreenLayout>
      <Box>
        <Text>Stats</Text>
      </Box>
    </ScreenLayout>
  );
}
