import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

import '../globals/colors';

export default function TabBar() {

	const Size = 30;

	const [colorList, setColorList] = useState(global.green);

	return (
		<View style={styles.container}>
			<View style={styles.innerButton}>
				<FontAwesome5 name="list-alt" size={Size} color={colorList} />
				<Text style={styles.innerText}>Lista</Text>
			</View>

			<View style={styles.innerButton}>
				<FontAwesome5 name="check-circle" size={Size} color="black" />
				<Text style={styles.innerText}>Meus Jobs</Text>
			</View>

			<View style={styles.innerButton}>
				<FontAwesome name="user-circle" size={Size} color="black" />
				<Text style={styles.innerText}>Perfil</Text>
			</View>
		</View>
	)

}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	innerButton: {
		alignItems: 'center',
	},
	innerText: {
		textAlign: 'center',
	},
	icon: {
	}
});
