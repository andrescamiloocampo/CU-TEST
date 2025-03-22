import { type ReactElement } from "react";
import { TouchableHighlight, StyleSheet, useColorScheme } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

interface PaginationButtonProps {
  onClick: () => void;
  iconName: string;
}

export const PaginationButton = ({ iconName, onClick }: PaginationButtonProps): ReactElement => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <TouchableHighlight
      onPress={onClick}
      style={[styles.paginationBtn, isDarkMode ? styles.darkMode : styles.lightMode]}
      underlayColor={isDarkMode ? '#ddd':'#444'}
    >
      <IconSymbol name={iconName} size={20} color={isDarkMode ?  '#000':'#fff'} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  paginationBtn: {
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#fff",
  },
});
