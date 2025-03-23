import { type ReactElement } from "react";
import { ThemedView, ThemedText } from "../atoms";
import { IconSymbol } from "../ui/IconSymbol";
import { useColorScheme, StyleSheet } from "react-native";

interface Props {
  icon: string;
  tag?: string;
  value?: string;
}

export const DetailedStat = ({ icon, tag, value }: Props): ReactElement => {
  const theme = useColorScheme();
  const isDarkMode = theme === "dark";

  const styles = getStyles(isDarkMode);

  return (
    <ThemedView style={styles.characterDetailedStat}>
      <ThemedView style={styles.iconContainer}>
        <IconSymbol name={icon} color={"#ffd700"} size={25} />
      </ThemedView>
      <ThemedView style={styles.statContent}>
        <ThemedText style={styles.tag}>{tag ?? "none"}</ThemedText>
        <ThemedText style={styles.value}>{value ?? "none"}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const getStyles = (isDarkMode: boolean) =>
  StyleSheet.create({
    characterDetailedStat: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: 'center',
      padding: 24,
      backgroundColor: isDarkMode ? "black" : "#f0f0f0",
      borderRadius: 15,
      gap: 12,
      overflow: 'hidden'
    },
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      backgroundColor: isDarkMode ? "#ffdd441a" : "#ffdd445c" ,
      borderRadius: 60,
      width: 50,
      height: 50,
    },
    statContent: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: 'none'
    },
    tag: {
      color: isDarkMode ? "gray" : "#555",
      fontSize: 12,
    },
    value: {
      color: isDarkMode ? "white" : "black",
      fontSize: 14,
      width: '80%'      
    }
  });
