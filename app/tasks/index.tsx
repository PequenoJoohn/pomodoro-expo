import useTaskContext from "@/components/context/useTaskContext";
import { FocusButton } from "@/components/FocusButton";
import { IconPlus } from "@/components/Icons";
import { TaskItem } from "@/components/TaskItem";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  const { tasks, deleteTask } = useTaskContext();

  console.log("tasks", tasks);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                key={item.id}
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.text}>Lista de tarefas:</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FocusButton
                  title="Adicionar nova tarefa"
                  icon={<IconPlus />}
                  outline
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    alignItems: "center",
  },
  wrapper: {
    gap: 40,
    width: "90%",
  },
  text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 26,
    marginBottom: 16
  },
  inner: {
    gap: 8,
  },
});
