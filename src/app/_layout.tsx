import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Splash } from "./(tabs)/Splash";
import Home from "./(tabs)";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TaskList } from "./(tabs)/TaskList";
import { Ionicons } from "@expo/vector-icons";
import NewTaskModal from "../components/NewTaskModal";
import Colors from "../constants/Colors";
import { TaskDetails } from "./(tabs)/TaskDetails";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = { initialRouteName: "(tabs)" };

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || !splashComplete) {
    return <Splash onComplete={setSplashComplete} />;
  }

  return <RootLayoutNav />;
}

const Tab = createBottomTabNavigator();

function RootLayoutNav() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            marginTop: 0,
            paddingTop: 0,
            width: "85%",
            alignSelf: "center",
          },
          tabBarVisible: route.name !== "TaskDetails", // Hide the tab for the SecondScreen
          tabBarActiveTintColor: Colors.salmon500,
          tabBarInactiveTintColor: Colors.gray100,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "TaskList") {
              iconName = "add-circle-outline";
            } else if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "NewTaskModal") {
              iconName = "list";
            }

            return <Ionicons name={iconName} size={size} color={focused ? color : color} />;
          },
        })}
        initialRouteName="Home"
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Nova Tarefa",
            tabBarLabelPosition: "beside-icon",
          }}
          name="TaskList"
          component={NewTaskModal}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelPosition: "beside-icon",

            tabBarLabel: "",
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Minhas tarefas",
            tabBarLabelPosition: "beside-icon",
          }}
          name="NewTaskModal"
          component={TaskList}
        />
        <Tab.Screen
          options={{
            tabBarButton: () => null,
            headerShown: false,
            tabBarLabel: "Nova Tarefa",
            tabBarLabelPosition: "beside-icon",
          }}
          name="TaskDetails"
          component={TaskDetails}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
