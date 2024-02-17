import { StyleSheet } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import { hideAsync } from "expo-splash-screen";

type Props = {
  onComplete: (status: boolean) => void;
};

export function Splash({ onComplete }: Props) {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }

      if (status.didJustFinish) {
        onComplete(true);
      }
    }

    setStatus(() => status);
  }

  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      isLooping={false}
      source={require("../../../assets/images/splash.mp4")}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  );
}
