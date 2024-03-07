import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerUserName}>{title}</Text>
      </View>
      <Image style={{ height: 65, width: 65 }} source={require("../assets/user-picture.png")} />
    </View>
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
  headerUserName: {
    color: Colors.salmon500,
    fontSize: 26,
    fontWeight: "bold",
  },
});
