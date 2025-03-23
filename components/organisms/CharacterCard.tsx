import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  useColorScheme 
} from "react-native";
import { CharacterSpanishModel } from "@/models/character.model";

export const CharacterCard = ({ ...character }: CharacterSpanishModel) => {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme ?? "light");

  return (
    <View style={styles.card}>
      <Image
        source={require('@/assets/images/astronaut.jpg')}
        style={styles.character_profile}
      />      

      <Text style={styles.name}>{character.nombre ?? ''}</Text>

      <View style={styles.attributesContainer}>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Altura:</Text>
          <Text style={styles.attributeValue}>{character.altura} cm</Text>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Peso:</Text>
          <Text style={styles.attributeValue}>{character.masa} kg</Text>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Cabello:</Text>
          <Text style={styles.attributeValue}>{character.color_cabello}</Text>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Piel:</Text>
          <Text style={styles.attributeValue}>{character.color_piel}</Text>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Ojos:</Text>
          <Text style={styles.attributeValue}>{character.color_ojos}</Text>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Nacimiento:</Text>
          <Text style={styles.attributeValue}>{character.ano_nacimiento}</Text>
        </View>
        <View style={styles.attributeRow}>
          <Text style={styles.attributeLabel}>Género:</Text>
          <Text style={styles.attributeValue}>{character.genero}</Text>
        </View>
      </View>
    </View>
  );
};

const getStyles = (colorScheme: "light" | "dark") => {
  const colors = {
    light: {
      cardBackground: "#f8f9fa",
      textPrimary: "#333",
      textSecondary: "#666",
      textTertiary: "#000",
      imageBackground: "gainsboro",
      dividerColor: "#e0e0e0",
    },
    dark: {
      cardBackground: "#181d28",
      textPrimary: "#fff",
      textSecondary: "#ccc",
      textTertiary: "#fff",
      imageBackground: "#333",
      dividerColor: "#444",
    }
  };

  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return StyleSheet.create({
    card: {
      padding: 20,
      borderRadius: 15,
      backgroundColor: theme.cardBackground,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 5,
      alignItems: "center",      
      maxWidth: 400, // Máximo ancho para pantallas grandes
      marginVertical: 10,
    },
    character_profile: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 15,
      backgroundColor: theme.imageBackground,
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 15,
      color: theme.textPrimary,
      textAlign: "center",
    },
    attributesContainer: {
      width: "100%",
    },
    attributeRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: theme.dividerColor,
    },
    attributeLabel: {
      fontSize: 14,
      color: theme.textSecondary,
      fontWeight: "500",
    },
    attributeValue: {
      fontSize: 14,
      color: theme.textTertiary,
      fontWeight: "bold",
    },
  });
};