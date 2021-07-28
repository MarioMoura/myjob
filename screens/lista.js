import React, {useContext} from "react";
import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList} from "react-native";

//import AuthContext from "../globals/authContext";
//
import Card from '../components/card';

import Header from "../components/header";
import DATA from "../globals/data";

export default function Lista({navigation}) {

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
			<TouchableOpacity onPress={() => navigation.navigate('myjobs', {item: item})}>
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
			<Header />
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
