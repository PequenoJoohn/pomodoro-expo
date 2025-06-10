import { Pressable, StyleSheet, Text } from "react-native";

interface Pomodoro {
    id: string;
    initialValue: number;
    image: string;
    display: string;
}

interface ActionButtonProps {
    timerType: Pomodoro;
    pomodoro: Pomodoro;
    onPress: () => void;
}

export const ActionButton = ({ timerType, pomodoro, onPress }: ActionButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={timerType.id === pomodoro.id ? styles.contextButtonActive : null} key={pomodoro.id}>
            <Text style={styles.contextButtonText}>{pomodoro.display}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contextButtonActive: {
        backgroundColor: '#144480',
        borderRadius: 8
    },
    contextButtonText: {
        fontSize: 12.5,
        color: "#FFFFFF",
        padding: 8,
    },
})