import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Button,
    Text
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]); // Items
    const [isAddMode, setIsAddMode] = useState(false); // Show text input or not

    // Adding items to list
    const addGoalHandler = goalTittle => {
        if (goalTittle.length === 0) {
            return;
        };
        setGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTittle }
        ]);
    };

    // Remove items from the list
    const removeGoalHandler = goalId => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        });
    };

    // Cancel function
    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false)
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalAdditionHandler}
            />

            {/* List of items */}
            <FlatList
                data={goals}
                renderItem={itemData => {
                    return (
                        <GoalItem
                            title={itemData.item.value}
                            id={itemData.item.id}
                            onDelete={removeGoalHandler}
                        />
                    )
                }}
            />

            {/* Showing additional information */}
            {Array.isArray(goals) && goals.length ?
                <Text style={styles.additionalInfo}>
                    *you can delete any item just by clicking on it
                </Text> : null
            }
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    additionalInfo: {
        fontSize: 10
    }
});