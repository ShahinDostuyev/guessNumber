import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../../components/UI/title";
import NumberContainer from "../../components/game/NumberContainer";
import PrimaryButton from "../../components/UI/primaryButton";
import Card from "../../components/UI/Card";
import InstructionText from "../../components/UI/InstructionText";
import Ionicons from "@expo/vector-icons/Ionicons";
import GuessLogItem from "../../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const generateRandomBetween = (min, max, exclude) => {
  if (min === max) {
    return min;
  }

  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

function GameScreen({ userNumber, onGameOver }) {
  const [initialGuess, setinitialGuess] = useState(
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  );
  const [currentGuess, setcurrentGuess] = useState(initialGuess);
  const [guessRounds, setguessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Do not lie", "You know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    const generateRandomBetween = (min, max, exclude) => {
      if (min === max) {
        return min;
      }

      const randomNumber = Math.floor(Math.random() * (max - min)) + min;

      if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
      } else {
        return randomNumber;
      }
    };

    if (direction === "lower") {
      maxBoundary = Math.max(minBoundary, currentGuess - 1);
    } else {
      minBoundary = Math.min(maxBoundary, currentGuess + 1);
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setcurrentGuess(newRandomNumber);
    setguessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  };
  const guessRoundsListlength = guessRounds.length;

  const { width, height } = useWindowDimensions();
  return (
    <>
      <View style={styles.screen}>
        <Title>Opponents guess</Title>
        {width < height ? (
          <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
              <InstructionText style={styles.instructionText}>
                Higher or lower?
              </InstructionText>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                    <Ionicons name="md-remove" size={24} color="white" />
                  </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                  <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                    <Ionicons name="md-add" size={24} color="white" />
                  </PrimaryButton>
                </View>
              </View>
            </Card>
          </>
        ) : (
          <>
            <View style={styles.buttonsContainerWide}>
              <View style={styles.buttonContainerWide}>
                <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                  <Ionicons name="md-remove" size={24} color="white" />
                </PrimaryButton>
              </View>
              <NumberContainer>{currentGuess}</NumberContainer>
              <View style={styles.buttonContainerWide}>
                <PrimaryButton onPress={() => nextGuessHandler("greater")}>
                  <Ionicons name="md-add" size={24} color="white" />
                </PrimaryButton>
              </View>
            </View>
          </>
        )}
        <View style={styles.listCOntainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListlength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerWide: {
    width:"20%",
    height:"40%"
  },
  instructionText: {
    marginBottom: 12,
  },
  listCOntainer: {
    flex: 1,
    padding: 16,
  },
});
