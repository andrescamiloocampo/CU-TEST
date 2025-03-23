import { type ReactElement, Dispatch, SetStateAction } from "react";
import { TextInput, StyleSheet, SafeAreaView } from "react-native";

interface SearchBarModel {
  searchPlaceholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const SearchBar = ({
  searchPlaceholder,
  value,
  onChange,
}: SearchBarModel): ReactElement => {
  return (
    <TextInput      
      style={styles.searchBar}
      placeholder={searchPlaceholder}
      value={value} 
      onChangeText={onChange}
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
