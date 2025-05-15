import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, ScrollView, StyleSheet } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams<{ name: string }>();
  const { animal } = useLocalSearchParams<{ animal: string }>();
  // const { animals } = useAnimalContext();

  return (
    <ScrollView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>{name}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.item}>This is a {animal}</ThemedText>
        {/* <Button
                title="make noise"
              /> */}
      </ThemedView>
      <Button title="Back" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  all: {
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  title: {
    color: "black",
    fontSize: 30,
    paddingTop: 30,
    textAlign: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingTop: 50,
  },
  stepContainer: {
    gap: 20,
    marginBottom: 8,
    fontSize: 20,
    paddingTop: 30,
    textAlign: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  item: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
});
