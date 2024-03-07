import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import Colors from "@/constants/Colors";
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";

export function TaskDetails() {
  return (
    <>
      <SafeAreaView>
        <Header title="Detalhes da Tarefa" />
        <ScrollView style={styles.container}>
          <Button title="Começar Pomodoro" iconName="play-circle-outline" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "85%",
    alignSelf: "center",
  },
});
