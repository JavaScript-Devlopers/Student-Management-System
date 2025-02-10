import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GRID_SIZE = 10;
const INITIAL_SNAKE = [{ x: 5, y: 5 }];
const INITIAL_FOOD = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const SnakeGame = ({ isEnabled }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;
    const gameInterval = setInterval(moveSnake, 300);
    return () => clearInterval(gameInterval);
  }, [snake]);

  const moveSnake = () => {
    const newHead = {
      x: (snake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
      y: (snake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
    };
    
    if (snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood({ x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) });
    } else {
      newSnake.pop();
    }
    setSnake(newSnake);
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(DIRECTIONS.RIGHT);
    setGameOver(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: isEnabled ? "black" : "white", alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: isEnabled ? "white" : "black", marginBottom: 20 }}>Snake Game</Text>
      <View style={{ width: 200, height: 200, flexDirection: "row", flexWrap: "wrap", borderWidth: 2 }}>
        {[...Array(GRID_SIZE * GRID_SIZE)].map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some(segment => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <View key={index} style={{ width: 20, height: 20, backgroundColor: isSnake ? "green" : isFood ? "red" : "#ddd" }} />
          );
        })}
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", margin: 5 }} onPress={() => setDirection(DIRECTIONS.UP)}><Text style={{ color: "white" }}>↑</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", margin: 5 }} onPress={() => setDirection(DIRECTIONS.LEFT)}><Text style={{ color: "white" }}>←</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", margin: 5 }} onPress={() => setDirection(DIRECTIONS.RIGHT)}><Text style={{ color: "white" }}>→</Text></TouchableOpacity>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", margin: 5 }} onPress={() => setDirection(DIRECTIONS.DOWN)}><Text style={{ color: "white" }}>↓</Text></TouchableOpacity>
      </View>
      {gameOver && (
        <TouchableOpacity style={{ marginTop: 20, padding: 10, backgroundColor: "red" }} onPress={resetGame}>
          <Text style={{ color: "white" }}>Restart Game</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SnakeGame;
