import { Platform, StyleSheet, Text, useWindowDimensions } from "react-native";

function Title({ children }) {
  const { height } = useWindowDimensions();
  const marginTop = height < 400 ? 10 : 40;
  return <Text style={[styles.title,{marginTop:marginTop}]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ios:0,android:1}),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
