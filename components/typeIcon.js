import React, {useContext} from "react";
import {StyleSheet, Image, Text, View, Button} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

export default function TypeIcon({dim, type, navigation}) {

	const styles = StyleSheet.create({
		base: {
			backgroundColor: 'white',
			borderRadius: 20,
		}
	});
	const RetIcon = () => {
		if (type == 'green') {
			return (
				<FontAwesome name="leaf" size={20} color="green" />
			);
		}
		if (type == 'yellow') {
			return (
				<MaterialIcons name="offline-bolt" size={20} color="yellow" />
			);
		}
		if (type == 'red') {
			return (
				<MaterialCommunityIcons name="home-circle" size={20} color="orange" />
			);
		} else {
			return (
				<MaterialCommunityIcons name="water" size={20} color="blue" />
			);
		}
	}
	return (
		<RetIcon />
	);
}
