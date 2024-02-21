import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
function PrimaryButton({ children, onPress }) {
  return (
    <>
      <View style={styles.buttonOuterContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed]
              : styles.buttonInnerContainer
          }
          android_ripple={{ color: Colors.primary200 }}
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    </>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: Colors.primary100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
