import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // New item
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />

            <Button title="ADD" onPress={() => {
                props.onAddGoal(enteredGoal);
                setEnteredGoal('')
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
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

export default GoalInput;