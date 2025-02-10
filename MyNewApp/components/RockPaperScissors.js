import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const choices = ["Rock", "Paper", "Scissors"];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a Tie!");
    } else if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setResult("You Win! 🎉");
    } else {
      setResult("You Lose! 😢");
    }
  };

  return (
    <View style={{
        flex: 1,
        justifyContent: "start",
        alignItems: "start",
        backgroundColor: "#f0f0f0",
      }}>
      <Text style={{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  }}>Rock, Paper, Scissors</Text>
      <View style={ {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 30,
  }}>
        {choices.map((choice , index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => playGame(choice)}>
            <Text style={styles.buttonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {userChoice && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>You Chose: {userChoice}</Text>
          <Text style={styles.resultText}>Computer Chose: {computerChoice}</Text>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "start",
  },
  resultText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default RockPaperScissors;
