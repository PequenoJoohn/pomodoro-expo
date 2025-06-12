import { Stack } from 'expo-router';

export default function StackLayout() {
    return (
        <Stack>
            <Stack.Screen
                name='pomodoro'
                options={{ headerShown: false }}
            />
        </Stack >
    )
}