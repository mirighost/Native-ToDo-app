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
    const [goals, setGoals] = useState([]); // Items
    const [isAddMode, setIsAddMode] = useState(false); // Show text input or not

    // Adding items to list
    const addGoalHandler = goalTittle => {
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
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10
    },
});