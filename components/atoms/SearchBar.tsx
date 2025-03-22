import { type ReactElement, Dispatch, SetStateAction } from "react";
import { TextInput, StyleSheet, SafeAreaView } from "react-native";

interface SearchBarModel {
  searchPlaceholder: string;
  value: string | number;
  onChange: Dispatch<SetStateAction<number|string>>;
}

export const SearchBar = ({
  searchPlaceholder,
  value,
  onChange,
}: SearchBarModel): ReactElement => {
  return (
    <TextInput
      keyboardType="numeric"
      style={styles.searchBar}
      placeholder={searchPlaceholder}
      value={value.toString()} 
      onChangeText={(text) => {
        if (text === "") {
          onChange(""); 
        } else {
          const numericValue = parseFloat(text);
          if (!isNaN(numericValue)) {
            onChange(numericValue); 
          }
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: "gainsboro",
    borderRadius: 60,
  },
});
