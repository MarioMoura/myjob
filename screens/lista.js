import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Card from '../components/card';
import DATA from "../globals/data";
import Header from "../components/header";

export default function Lista({navigation}) {

	const Stack = createStackNavigator();

	//const { isLogged, setIsLogged } = useContext(AuthContext);

	const Separator = () => {
		return (
			<View
				style={{
					backgroundColor: global.lightgray,
					height: 2,
					marginVertical: 10,
					borderRadius: 20,
				}}>
			</View>
		);
	}

	const SeparatorTop = () => {
		return (
			<View
				style={{
					backgroundColor: global.lightgray,
					height: 2,
					width: '90%',
					marginVertical: 10,
					borderRadius: 20,
				}}>
			</View>
		);
	}

	const flatItem = ({item}) => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate('ojob', {item: item})}>
				<Card item={item} />
			</TouchableOpacity>
		)
	}

	function ShowList() {
		return (
			<FlatList
				data={DATA}
				renderItem={flatItem}
				ItemSeparatorComponent={Separator}
				style={{width: '90%'}}
				showsVerticalScrollIndicator={false}
			/>
		);
	}


	return (
		<View style={styles.base}>
			<Header
				aboutText="Lista Page"
			/>
			<View style={styles.container}>
				<Text style={styles.mainText}>Os Jobs</Text>
				<SeparatorTop />
				<ShowList />
				<SeparatorTop />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	base: {
		flex: 1,
		backgroundColor: global.gray,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	mainText: {
		width: '90%',
		color: 'white',
		textAlign: 'left',
		fontSize: 35,
	}
});
