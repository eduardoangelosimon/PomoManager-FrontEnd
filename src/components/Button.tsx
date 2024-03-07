import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps, View } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  iconName?: string;
  size?: "large" | "small";
  variant?: "contained" | "outlined";
  title: string;
};

export function Button({ iconName, title, size = "large", variant = "contained" }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{title}</Text>
        {iconName ? <Ionicons name={iconName} size={22} color={Colors.white} /> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red,
    borderRadius: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
  },
  title: {
    color: Colors.white,
    fontWeight: "600",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
