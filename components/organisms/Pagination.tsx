import { type ReactElement } from "react";
import { ThemedView, PageCounter, PaginationButton } from "../atoms";
import { StyleSheet } from "react-native";

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
}

type actionT = "next" | "prev";

export const Pagination = ({ currentPage, setCurrentPage, pages }: Props):ReactElement => {
  const handlePage = (action: actionT) => {
    if (action == "next") {
      setCurrentPage((currentPage) => Math.min(currentPage + 1, pages));
    }

    if (action == "prev") {
      setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }
  };

  return(
  <ThemedView style={styles.paginationContainer}>
    <PaginationButton
      onClick={() => {
        handlePage("prev");
      }}
      iconName="arrow-left"
    />

    <PageCounter count={currentPage} />

    <PaginationButton
      onClick={() => {
        handlePage("next");
      }}
      iconName="arrow-right"
    />
  </ThemedView>
  );

};

const styles = StyleSheet.create({
  paginationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
});
