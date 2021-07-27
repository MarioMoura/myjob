import React, {useContext} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
} from 'react-native';

import AuthContext from '../globals/authContext';

import Header from '../components/header';

export default function Lista({navigation}) {

	const {isLogged, setIsLogged} = useContext(AuthContext);

	const Back = () => {
		setIsLogged(true);
		console.log(isLogged);
	}

	return (
		<View style={styles.base}>
			<Header />
			<View style={styles.container}>
				<Text>Lista Page</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	base: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
