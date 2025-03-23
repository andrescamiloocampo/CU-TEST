import { type ReactElement } from "react";
import { ThemedView, ThemedText } from "../atoms";
import { IconSymbol } from "../ui/IconSymbol";
import { StyleSheet } from "react-native";

interface Props {
  hair: string;
  skin: string;
  eyes: string;
}

export const Appearance = ({ eyes, hair, skin }: Props): ReactElement => {
  return (
    <ThemedView style={styles.appearance}>
      <ThemedView style={styles.appearanceStat}>
        <IconSymbol name={"color.outline"} color={"#ffd700"} size={25} />
        <ThemedText>Cabello: {hair}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.appearanceStat}>
        <IconSymbol name={"hand-spock.outline"} color={"#ffd700"} size={25} />
        <ThemedText>Piel: {skin}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.appearanceStat}>
        <IconSymbol name={"eye.outline"} color={"#ffd700"} size={25} />
        <ThemedText>Ojos: {eyes}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  appearance: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingTop: 12,
  },
  appearanceStat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
