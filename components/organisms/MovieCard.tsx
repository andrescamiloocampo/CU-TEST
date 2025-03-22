import { type ReactElement } from "react";
import { StyleSheet, useColorScheme, View, ScrollView } from "react-native";
import { ThemedText } from "../atoms/ThemedText";
import type { MovieSpanishModel } from "@/models/movie.model";

export const MovieCard = ({
  director,
  episodio_id,
  fecha_estreno,
  productores,
  texto_apertura,
  titulo,
}: MovieSpanishModel): ReactElement => {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme ?? 'light');

  return (
    <View style={styles.card}>
      <ThemedText style={styles.title}>{titulo}</ThemedText>
      <ThemedText style={styles.episode}>Episodio {episodio_id}</ThemedText>
      <ScrollView style={styles.scroll}>
        <ThemedText style={styles.opening}>{texto_apertura}</ThemedText>
      </ScrollView>
      <ThemedText style={styles.info}>
        <ThemedText style={styles.bold}>Director:</ThemedText> {director}
      </ThemedText>
      <ThemedText style={styles.info}>
        <ThemedText style={styles.bold}>Productores:</ThemedText> {productores}
      </ThemedText>
      <ThemedText style={styles.info}>
        <ThemedText style={styles.bold}>Fecha de estreno:</ThemedText>{" "}
        {fecha_estreno}
      </ThemedText>
    </View>
  );
};

const getStyles = (colorScheme: "light" | "dark" | null) => {
  const colors = {
    light: {
      cardBackground: "#fff",
      textPrimary: "#333",
      textSecondary: "gray",
      textTertiary: "#333",
      shadowColor: "#000",
    },
    dark: {
      cardBackground: "#181d28",
      textPrimary: "#fff",
      textSecondary: "#ccc",
      textTertiary: "#fff",
      shadowColor: "#fff",
    }
  };

  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return StyleSheet.create({
    card: {
      backgroundColor: theme.cardBackground,
      padding: 20,
      margin: 10,
      borderRadius: 10,
      shadowColor: theme.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      cursor: "pointer",
    },  
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 5,
      color: theme.textPrimary,
    },
    episode: {
      fontSize: 16,
      color: theme.textSecondary,
    },
    scroll: {
      maxHeight: 100,
      marginVertical: 10,
    },
    opening: {
      fontSize: 14,
      color: theme.textTertiary,
    },
    info: {
      fontSize: 14,
      marginTop: 5,
      color: theme.textTertiary,
    },
    bold: {
      fontWeight: "bold",
    },
  });
};