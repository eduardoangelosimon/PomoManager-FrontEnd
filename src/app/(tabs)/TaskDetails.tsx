import { Header } from "@/components/Header";
import Colors from "@/constants/Colors";
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from "react-native";

export function TaskDetails() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header title="Detalhes da Tarefa" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
