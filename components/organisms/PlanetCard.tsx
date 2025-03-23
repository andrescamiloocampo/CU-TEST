import { type ReactElement } from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../atoms/ThemedText";
import type { PlanetSpanish } from "@/models/planet.model";

export const PlanetCard = ({ ...props }: PlanetSpanish): ReactElement => {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme ?? "light");

  return (
    <View style={styles.card}>
      <ThemedText style={styles.title}>{props.nombre}</ThemedText>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Periodo de Rotación:</ThemedText>{" "}
            {props.periodoRotacion.length > 0 ? props.periodoRotacion : "N/A"}
          </ThemedText>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Periodo Orbital:</ThemedText>{" "}
            {props.periodoOrbital.length > 0 ? props.periodoOrbital : "N/A"}
          </ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Diámetro:</ThemedText>{" "}
            {props.diametro}
          </ThemedText>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Clima:</ThemedText> {props.clima}
          </ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Gravedad:</ThemedText>{" "}
            {props.gravedad}
          </ThemedText>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Terreno:</ThemedText> {props.terreno}
          </ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Agua Superficial:</ThemedText>{" "}
            {props.aguaSuperficial}
          </ThemedText>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Población:</ThemedText>{" "}
            {props.poblacion}
          </ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Residentes:</ThemedText>{" "}
            {props.residentes.join(", ")}
          </ThemedText>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Películas:</ThemedText>{" "}
            {props.peliculas.join(", ")}
          </ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Creado:</ThemedText> {props.creado}
          </ThemedText>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>Editado:</ThemedText> {props.editado}
          </ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText style={styles.info}>
            <ThemedText style={styles.bold}>URL:</ThemedText> {props.url}
          </ThemedText>
        </View>
      </View>
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
    },
  };

  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return StyleSheet.create({
    card: {
      backgroundColor: theme.cardBackground,
      padding: 16,
      margin: 10,
      borderRadius: 10,
      shadowColor: theme.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 12,
      color: theme.textPrimary,
    },
    infoContainer: {
      flexDirection: "column",
      gap: 8, 
    },
    infoRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 8, 
    },
    info: {
      fontSize: 14, 
      color: theme.textTertiary,
      flex: 1, 
    },
    bold: {
      fontWeight: "bold",
    },
  });
};