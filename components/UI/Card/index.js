import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";

function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;


const styles= StyleSheet.create({
    card: {
        alignItems: "center",
        padding: 16,
        marginTop: 20,
        marginHorizontal: 24,
        backgroundColor: Colors.primary300,
        borderRadius: 8,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
      },
})