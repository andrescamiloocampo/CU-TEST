import { ReactElement } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";

interface PageCounterProps {
  count?: number;
}

export const PageCounter = ({ count }: PageCounterProps): ReactElement => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      style={[styles.pageCounter, isDarkMode ? styles.darkMode : styles.lightMode]}
    >
      <ThemedText style={[styles.countIndicator, isDarkMode ? styles.textDark : styles.textLight]}>
        {count ?? 0}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  pageCounter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  lightMode: {
    backgroundColor: "#333",    
  },
  darkMode: {
    backgroundColor: "#fff"    
  },
  countIndicator: {
    fontSize: 24,
    padding: 0,
    margin: 0,
  },
  textLight: {
    color: '#fff'
  },
  textDark: {
    color: '#000'
  }
});
