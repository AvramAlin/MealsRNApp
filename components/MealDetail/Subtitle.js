import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return <Text style={styles.subTitle}>{children}</Text>;
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2c0a7",
    fontFamily: "dmsans-regular",
    fontSize: 18,
    marginHorizontal: 12,
    marginVertical: 4,
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e2c0a7",
    borderBottomWidth: 2,
  },
});
