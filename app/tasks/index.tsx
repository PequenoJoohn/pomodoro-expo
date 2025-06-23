import { FocusButton } from "@/components/FocusButton";
import { IconPlus } from "@/components/Icons";
import { TaskItem } from "@/components/TaskItem";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Lista de tarefas:</Text>
        <View style={styles.inner}>
          <TaskItem completed text="Estudar React" />
          <TaskItem completed={false} text="Estudar Native" />
        </View>
        <FocusButton
          title="Adicionar nova tarefa"
          icon={<IconPlus />}
          outline
          onPress={() => router.navigate('/add-task')}
        />
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
  },
  inner: {
    gap: 8,
  },
});
