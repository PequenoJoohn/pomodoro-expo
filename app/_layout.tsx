import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function StackLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#021123",
          },
          headerTintColor: "#FFFFFF",
          drawerStyle: {
            backgroundColor: "#021123",
          },
          drawerLabelStyle: {
            color: "#FFFFFF",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="add-task/index"
          options={{
            // headerShown: false,
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
        <Drawer.Screen
          name="pomodoro"
          options={{
            // headerShown: false,
            drawerLabel: "Timer",
            title: "",
          }}
        />

        <Drawer.Screen
          name="tasks/index"
          options={{
            // headerShown: false,
            drawerLabel: "Lista de tarefas",
            title: "",
          }}
        />
      </Drawer>
      {/* <Stack.Screen name="pomodoro" options={{ headerShown: true }} /> */}
    </GestureHandlerRootView>
  );
}
