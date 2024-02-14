import { StyleSheet, View } from "react-native";
import { Splash } from "./Splash";
import { useState } from "react";
import TabTwoScreen from "./two";

export default function TabOneScreen() {
  const [splashComplete, setSplashComplete] = useState(false);

  return <View>{splashComplete ? <TabTwoScreen /> : <Splash onComplete={setSplashComplete} />}</View>;
}
