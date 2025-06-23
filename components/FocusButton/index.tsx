import { Pressable, StyleSheet, Text } from "react-native";

interface FocusButtonProps {
  title: string;
  outline?: boolean;
  onPress?: () => void;
  icon?: React.JSX.Element;
}

export const FocusButton = ({
  onPress,
  title,
  icon,
  outline,
}: FocusButtonProps) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton]}
      onPress={onPress}
    >
      {icon}
      <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButton: {
    backgroundColor: "transparent",
    borderColor: "#B872FF",
    borderWidth: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18,
  },
  outlineButtonText: {
    color: "#B872FF",
  },
});
