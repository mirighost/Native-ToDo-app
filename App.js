import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);

    // Adding items to list
    const addGoalHandler = goalTittle => {
        setGoals(currentGoals => [
            ...currentGoals,
            { key: Math.random().toString(), value: goalTittle }
        ]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler} />

            {/* List of items */}
            <FlatList
                data={goals}
                renderItem={itemData => {
                    return <GoalItem title={itemData.item.value} />;
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