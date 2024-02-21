import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../../components/UI/primaryButton";
import Colors from "../../constants/Colors";
import Title from "../../components/UI/title";
import Card from "../../components/UI/Card";
import InstructionText from "../../components/UI/InstructionText";

function StartGameScreen({ onConfirmationHandler }) {
  const { width, height } = useWindowDimensions();

  const [enteredNumber, setenteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setenteredNumber(enteredText);
  };

  const resetHandler = () => {
    setenteredNumber("");
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!!!",
        "Entered number must be between 1 and 99 only",
        [{ text: "Ok", style: "destructive", onPress: resetHandler }]
      );
    } else {
      console.log("You got it");
      setenteredNumber("");
      onConfirmationHandler(chosenNumber);
    }
  };

  const marginTop = height < 400 ? 30 : 100;
  return (
    <View style={[styles.rootContainer, { marginTop: marginTop }]}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
          autoFocus={true}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
