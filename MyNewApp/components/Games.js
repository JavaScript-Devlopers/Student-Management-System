import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Tictoe from "@/components/Tictoe";
import RockPaperScissors from "@/components/RockPaperScissors";

const projects = [
  { title: "Tic Tac Toe", component: Tictoe },
  { title: "Rock Paper Scissors", component: RockPaperScissors },
];

const App = ({ isEnabled, cardStyle }) => {
  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white" }}>
      <ThemedView style={cardStyle}>
        <ThemedText
          style={{ color: isEnabled ? "white" : "black" }}
          type="subtitle"
        >
          📂 Games
        </ThemedText>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {projects.map((game, index) => (
            <>
              <game.component key={index} isEnabled={isEnabled} cardStyle={cardStyle} />
            </>
          ))}
        </ScrollView>
      </ThemedView>
    </View>
  );
};

export default App;
