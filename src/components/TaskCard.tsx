import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function TaskCard() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.salmonBorder} />
      <View style={styles.rowContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Fazer relatório do TCC</Text>
          <Text style={styles.description}>Escrever o relatório e assinar o documento</Text>
          <View style={styles.dateRow}>
            <View style={styles.row}>
              <Image source={require("../assets/clock.png")} />
              <Text>10:00 - 11:30</Text>
            </View>
            <View style={styles.row}>
              <Image source={require("../assets/calendar.png")} />
              <Text>Hoje</Text>
            </View>
          </View>
        </View>
        <View>
          <BouncyCheckbox
            innerIconStyle={{
              borderColor: Colors.salmon500,
              borderRadius: 4,
              borderWidth: 2,
            }}
            iconStyle={{
              borderRadius: 4,
            }}
            fillColor={Colors.salmon500}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    marginVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.5,

    elevation: 9,
  },

  textContainer: {
    marginLeft: 12,
    alignSelf: "center",
    height: "80%",
    justifyContent: "space-between",
  },

  salmonBorder: {
    width: 10,
    backgroundColor: Colors.salmon500,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  title: {
    fontSize: 14,
    color: Colors.black,
  },

  description: {
    fontSize: 12,
    color: Colors.gray500,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dateRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  rowContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "98%",
    justifyContent: "space-between",
  },
});
