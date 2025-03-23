import { type ReactElement } from "react";
import { useColorScheme, StyleSheet } from "react-native";
import { ThemedText, ThemedView } from "../atoms";

interface Props {
  height?: string;
  mass?: string;
  gender?: string;
}

export const CharacterDetails = ({
  height = "0",
  mass = "0",
  gender = "none",
}: Props): ReactElement => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  const styles = getStyles(isDarkMode);

  return (
    <ThemedView style={styles.characterDetails}>
      <ThemedView style={styles.statContainer}>
        <ThemedText style={styles.tag} type="default">
          Altura
        </ThemedText>
        <ThemedText style={styles.statValue} type="title">
          {`${height} cm`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.statContainer}>
        <ThemedText style={styles.tag} type="default">
          Masa
        </ThemedText>
        <ThemedText style={styles.statValue} type="title">
          {`${mass} Kg`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.statContainer}>
        <ThemedText style={styles.tag} type="default">
          Género
        </ThemedText>
        <ThemedText style={styles.statValue} type="title">
          {gender}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    characterDetails: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      padding: 24,
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: 12,
      backgroundColor: isDarkMode ? "#000" : "#f0f0f0",
      borderRadius: 15,
    },
    statContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'none',
    },
    statValue: {
      fontSize: 24,
      fontWeight: "500",
      color: isDarkMode ? "#fff" : "#000",
    },
    tag: {
      color: isDarkMode ? "gray" : "#555",
    },
  });
