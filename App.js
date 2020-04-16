import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [goals, setGoals] = useState([]);

    // New item
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    // Adding items to list
    const addGoalHandler = () => {
        setGoals(currentGoals => [...currentGoals, enteredGoal]);
        setEnteredGoal('')
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>

                <TextInput
                    placeholder="Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <Button title="ADD" onPress={addGoalHandler} />

            </View>
            <View>
                {goals.map((goal) => <Text key={goal}>{goal}</Text>)}
            </View>
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
        borderBottomColor: "black",
        borderWidth: 1,
        padding: 10
    }
});