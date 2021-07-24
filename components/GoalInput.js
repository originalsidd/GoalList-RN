import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = ({ onAddGoal, cancelAddGoal, visible }) => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal visible={visible} animationType='slide'>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Add Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}><Button title="CANCEL" color="red" onPress={cancelAddGoal} /></View>
					<View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	input: {
		width: '80%',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		padding: 6,
		marginBottom: 15,
		fontSize: 20
	},
	buttonContainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	button: {
		width: '40%'
	}
})

export default GoalInput
