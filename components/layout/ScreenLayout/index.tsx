import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@/components/ui/box";

type ScreenLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScreenLayout({
  children,
  className = "",
}: ScreenLayoutProps) {
  const insets = useSafeAreaInsets();
  return (
    <Box className={`flex-1 ${className}`} style={{ paddingTop: insets.top }}>
      {children}
    </Box>
  );
}
