import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../../components/UI/title";
import Colors from "../../constants/Colors";
import PrimaryButton from "../../components/UI/primaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over!!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        It takes <Text style={styles.highlight}>{roundsNumber}</Text> guess for
        reaching to <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingng: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary300,
    overflow: "hidden",
    margin: 36,
  },
  image: { width: "100%", height: "100%" },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans",
    color: Colors.primary300,
  },
});
