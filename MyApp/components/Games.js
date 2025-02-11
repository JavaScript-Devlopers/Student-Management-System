import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TicTacToe from "@/components/TicTacToe";
import RockPaperScissors from "@/components/RockPaperScissors";
import MemoryGame from "@/components/MemoryGame";
import SnakeGame from "@/components/SnakeGame";

const projects = [
  { title: "Tic Tac Toe", component: TicTacToe },
  { title: "Rock Paper Scissors", component: RockPaperScissors },
  { title: "Memory Game", component: MemoryGame },
  { title: "Snake Game", component: SnakeGame },
];

const Games = ({ isEnabled, cardStyle }) => {
  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
      {/* <ThemedView style={cardStyle}> */}
      <ThemedText
        style={{ color: isEnabled ? "white" : "black" }}
        type="subtitle"
      >
        📂 Games
      </ThemedText>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {projects.map((game, index) => (
          <>
            <View
              style={{
                flex: 1,
                backgroundColor: isEnabled ? "black" : "white",
                justifyContent: "center",
                width: 400,
              }}
            >
              <game.component
                key={index}
                isEnabled={{ isEnabled: isEnabled }}
                cardStyle={cardStyle}
              />
            </View>
          </>
        ))}
      </ScrollView>
      {/* </ThemedView> */}
    </View>
  );
};

export default Games;
