import { TasksProvider } from "@/components/context/TaskProvider";
import Ionicons from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function StackLayout() {
  return (
    <TasksProvider>
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
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color={"#FFF"}
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="edit-task/[id]"
            options={{
              drawerItemStyle: {
                display: "none",
              },
              title: "",
              headerLeft: () => {
                return (
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color={"#FFF"}
                    style={{ marginLeft: 16 }}
                    onPress={() => router.navigate("/tasks")}
                  />
                );
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
    </TasksProvider>
  );
}
