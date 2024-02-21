import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/gameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/gameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setuserNumber] = useState("");
  const [isGameOver, setisGameOver] = useState(true);
  const [guessRounds, setguessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const settingInput = (enteredText) => {
    setuserNumber(enteredText);
    setisGameOver(false);
  };

  const gameOverHandler = (numberOfRounds) => {
    setisGameOver(true);
    setguessRounds(numberOfRounds)

  };

  const startNewGameHandler = () => {
    setuserNumber(null);
    setguessRounds(0)
  };

  let screen = <StartGameScreen onConfirmationHandler={settingInput} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <LinearGradient
      colors={[Colors.primary250, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="auto" />
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
