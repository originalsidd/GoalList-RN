import React, { useState } from 'react';
import { 
  StyleSheet,
  View, 
  FlatList,
  Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setGoals(currentGoals => [...goals, 
      { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => goals.filter(goal => goal.id !== goalId));
  }

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={setIsAddMode.bind(this, true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} cancelAddGoal={cancelAddGoalHandler} />
      <FlatList data={goals} renderItem={itemData => 
        <GoalItem
          id={itemData.item.id}
          onDelete={removeGoalHandler} 
          title={itemData.item.value} 
        />} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});
