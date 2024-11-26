import { TouchableOpacity, Platform } from "react-native";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface TabItem {
  name: string;
  label: string;
  icon: string;
  activeIcon: string;
}

export function CustomTabBar({ tabItems }: { tabItems: TabItem[] }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box className="flex-row bg-white border-t border-gray-200">
      {tabItems.map((item) => {
        const isActive = pathname.includes(item.name);
        return (
          <TouchableOpacity
            key={item.name}
            className="flex-1 items-center justify-center py-3"
            style={{ paddingBottom: Platform.OS === "ios" ? 24 : 12 }}
            onPress={() => router.push(`/(tabs)/${item.name}` as any)}
          >
            <Ionicons
              name={isActive ? (item.activeIcon as any) : (item.icon as any)}
              size={24}
              color={isActive ? "#007AFF" : "#8E8E93"}
            />
            <Text
              className={`text-xs mt-1 ${
                isActive ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
}
