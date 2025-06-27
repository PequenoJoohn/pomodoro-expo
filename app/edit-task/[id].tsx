import useTaskContext from "@/components/context/useTaskContext";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EditTask() {
  const { id } = useLocalSearchParams();
  const [description, setDescription] = useState("");

  const { tasks, updateTask } = useTaskContext();

  const task = tasks.find((task) => task.id === Number(id));

  const handleSave = () => {
    if (!description) {
      return;
    }

    updateTask(Number(id), description);
    router.navigate("/tasks");
  };

  useEffect(() => {
    if (task) {
      setDescription(task.description || "");
    }
  }, [task]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Editar tarefa:</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            multiline
          />
          <Pressable style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Salvar</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 24,
    justifyContent: "center",
    gap: 16,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    minHeight: 100,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
