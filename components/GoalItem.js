import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({title, id, onDelete}) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)} >
			<View style={styles.listItem}>
				<Text>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 5,
		backgroundColor: '#ddd',
		borderColor: 'black',
		borderWidth: 1
	}
})

export default GoalItem
