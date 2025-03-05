import { useEffect } from "react";
import { View, Text } from "react-native";
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
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "600" }}>
        Rotate your device
      </Text>
    </View>
  );
}
