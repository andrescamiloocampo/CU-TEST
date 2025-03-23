import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { OpaqueColorValue, StyleProp, ViewStyle } from "react-native";

export type IconSymbolName = keyof typeof MAPPING;

// Mapeo de nombres de iconos con su respectiva familia y nombre en la librería
const MAPPING: Record<
  IconSymbolName,
  { family: "MaterialIcons" | "Ionicons" | "FontAwesome"; name: string }
> = {
  "house.fill": { family: "MaterialIcons", name: "home" },
  "paperplane.fill": { family: "Ionicons", name: "paper-plane" },
  "chevron.left.forwardslash.chevron.right": {
    family: "MaterialIcons",
    name: "code",
  },
  "chevron.right": { family: "MaterialIcons", name: "chevron-right" },
  "planet.fill": { family: "Ionicons", name: "planet" },
  "people.fill": { family: "Ionicons", name: "people" },
  "arrow-left": { family: "FontAwesome", name: "arrow-left" },
  "arrow-right": { family: "FontAwesome", name: "arrow-right" },
  "plane.fill": { family: "FontAwesome", name: "plane" },
  "boat.fill": { family: "Ionicons", name: "boat" },
  "car.fill": { family: "FontAwesome", name: "car" },
  "film.outline": { family: "FontAwesome", name: "film" },
  "color.outline": {family: "Ionicons",name: "color-fill-outline"},
  "hand-spock.outline": {family: "FontAwesome",name:"hand-spock-o"},
  "eye.outline": {family: "FontAwesome",name: "eye"}
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
}) {
  const icon = MAPPING[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in MAPPING.`);
    return null;
  }

  const { family, name: iconName } = icon;

  if (family === "MaterialIcons") {
    return (
      <MaterialIcons name={iconName} size={size} color={color} style={style} />
    );
  } else if (family === "Ionicons") {
    return <Ionicons name={iconName} size={size} color={color} style={style} />;
  } else if (family === "FontAwesome") {
    return (
      <FontAwesome name={iconName} size={size} color={color} style={style} />
    );
  }

  return null;
}
