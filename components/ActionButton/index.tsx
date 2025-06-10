import { Dispatch } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface Pomodoro {
    id: string;
    initialValue: number;
    image: string;
    display: string;
}

interface ActionButtonProps {
    timerType: Pomodoro;
    setTimerType: Dispatch<Pomodoro>;
    pomodoro: Pomodoro;
}

export const ActionButton = ({ timerType, setTimerType, pomodoro }: ActionButtonProps) => {
    return (
        <Pressable
            onPress={() => setTimerType(pomodoro)}
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