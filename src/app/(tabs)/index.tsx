import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { Calendar } from "react-native-calendars";
import { TaskCard } from "@/components/TaskCard";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.taskContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerHello}>Olá,</Text>
            <Text style={styles.headerUserName}>Eduardo!</Text>
          </View>
          <Image style={{ height: 65, width: 65 }} source={require("../../assets/user-picture.png")} />
        </View>
        <Calendar
          theme={{
            textSectionTitleColor: Colors.black,
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#B73232",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#ffffff",
            todayBackgroundColor: "#B73232",
            dayTextColor: "#2d4150",
            textDisabledColor: "#c9c9c9",
            dotColor: "#fffff",
            selectedDotColor: "#ffffff",
            arrowColor: Colors.black,
            disabledArrowColor: "#c9c9c9",
            monthTextColor: "#828282",
            indicatorColor: "#828282",
            textDayFontWeight: "500",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "500",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          style={styles.calendar}
        />
        <View>
          <Text style={styles.nextTasksTitle}>Próximas tarefas</Text>
        </View>

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
    width: "85%",
    justifyContent: "center",
    alignSelf: "center",
  },
  headerContainer: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
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
    width: "90%",
    alignSelf: "center",
  },
  nextTasksTitle: {
    color: Colors.salmon500,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
    marginLeft: "5%",
  },
  taskContainer: {
    alignSelf: "center",
    width: "110%",
  },
});
