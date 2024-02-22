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
import Colors from "../constants/Colors";
import NewTaskModal from "../components/NewTaskModal";

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
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            marginTop: 0,
            paddingTop: 0,
          },
          tabBarActiveTintColor: Colors.salmon500,
          tabBarInactiveTintColor: Colors.gray500,
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Nova Tarefa",
            tabBarLabelPosition: "beside-icon",
            tabBarIcon: () => <Ionicons name="add-circle-outline" size={20} />,
          }}
          name="TaskList"
          component={NewTaskModal}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelPosition: "beside-icon",

            tabBarIcon: () => <Ionicons name="home" size={20} />,
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
            tabBarIcon: () => <Ionicons name="list" size={20} />,
          }}
          name="NewTaskModal"
          component={TaskList}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
