import { Fab, FabLabel } from "@/components/ui/fab";
import { router, Tabs } from "expo-router";

export default function TabLayou() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Fab onPress={() => router.navigate("/add-animal")}>
        <FabLabel>Add</FabLabel>
      </Fab>
    </Tabs>
  );
}
