import React, {useContext} from "react";
import {StyleSheet, Image, Text, View, Button} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

export default function TypeIcon({style, size, type, navigation}) {

	const RetIcon = () => {
		if (type == 'green') {
			return (
				<FontAwesome style={style} name="leaf" size={size} color="green" />
			);
		}
		if (type == 'yellow') {
			return (
				<MaterialIcons style={style} name="offline-bolt" size={size} color="yellow" />
			);
		}
		if (type == 'red') {
			return (
				<MaterialCommunityIcons style={style} name="home-circle" size={size} color="orange" />
			);
		} else {
			return (
				<MaterialCommunityIcons style={style} name="water" size={size} color="blue" />
			);
		}
	}
	return (
		<RetIcon />
	);
}
