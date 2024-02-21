import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../../components/UI/title";
import Colors from "../../constants/Colors";
import PrimaryButton from "../../components/UI/primaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { height } = useWindowDimensions();
  const marginTop = height < 400 ? 30 : 100;

  return (
    <View style={[styles.rootContainer,{marginTop:marginTop}]}>
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary300,
    overflow: "hidden",
    marginVertical: 30,
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
