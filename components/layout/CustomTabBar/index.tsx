import { useRouter, usePathname } from "expo-router";
import { Platform } from "react-native";
import { Pressable } from "@/components/ui/pressable";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

interface TabItem {
  name: string;
  label: string;
  path: string;
  icon: React.ElementType;
}

export function CustomTabBar({ tabItems }: { tabItems: TabItem[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const isTabActive = (itemName: string, itemLabel: string) => {
    // If pathname is just "/", consider home tab as active
    if (pathname === "/" && itemName === "home") {
      return true;
    }
    // Otherwise check if the pathname includes the tab name or label
    return (
      pathname.includes(`/${itemName}`) ||
      pathname.includes(itemLabel.toLowerCase())
    );
  };
  return (
    <Box className="flex-row bg-background-0 px-3 rounded-t-xl">
      {tabItems.map((item) => {
        const isActive = isTabActive(item.name, item.label);
        return (
          <Pressable
            key={item.name}
            className="flex-1 items-center justify-center p-[15px]"
            style={{ paddingBottom: Platform.OS === "ios" ? 24 : 12 }}
            onPress={() => router.push(`/(tabs)/${item.path}` as any)}
          >
            <item.icon isActive={isActive} className="w-[24px] h-[24px]" />
            <Text
              className={`text-xs mt-1 font-roboto ${
                isActive ? "text-primary-300" : "text-typography-400"
              }`}
            >
              {item.label}
            </Text>
          </Pressable>
        );
      })}
    </Box>
  );
}
