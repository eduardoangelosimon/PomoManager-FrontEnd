import { TaskCard } from "@/components/TaskCard";
import Colors from "@/constants/Colors";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function TaskList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerUserName}>Minhas tarefas</Text>
        </View>
        <Image style={{ height: 65, width: 65 }} source={require("../../assets/user-picture.png")} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dateTitleContainer}>
          <Text style={styles.nextTasksTitle}>Hoje</Text>
        </View>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <View style={styles.dateTitleContainer}>
          <Text style={styles.nextTasksTitle}>Amanhã</Text>
        </View>

        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerContainer: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 18,
    paddingBottom: 10,
  },
  headerHello: {
    fontSize: 28,
    color: Colors.salmon500,
  },
  headerUserName: {
    color: Colors.salmon500,
    fontSize: 28,
    fontWeight: "bold",
  },
  calendar: {
    marginVertical: 38,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,
  },
  nextTasksTitle: {
    color: Colors.salmon500,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 14,
  },
  dateTitleContainer: {
    width: "92%",
    alignSelf: "center",
  },
});
