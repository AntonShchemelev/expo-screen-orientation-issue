import { useEffect } from "react";
import { View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function RootLayout() {
  useEffect(() => {
    const subscription = ScreenOrientation.addOrientationChangeListener(
      () => {}
    );

    return () =>
      ScreenOrientation.removeOrientationChangeListener(subscription);
  }, []);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white" }} />
  );
}
