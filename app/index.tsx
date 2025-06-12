import { FocusButton } from "@/components/FocusButton";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <View style={styles.inner}>
        <Text style={styles.title}>
          Otimize sua{'\n'}produtividade,{'\n'}
          <Text style={styles.bold}>
            mergulhe no que{'\n'} importa
          </Text>
        </Text>
        <Image source={require('../assets/images/home.png')} />
        <FocusButton title="Quero inicial!" onPress={() => router.replace('/pomodoro')} />

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  inner: {
    gap: 16
  },
  title: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 26
  },
  bold: {
    fontWeight: 'bold'
  },
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98a0A8",
    fontSize: 12.5,
  },
});
