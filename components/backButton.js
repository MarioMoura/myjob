import React from 'react';
import {
	Text,
	View,
	Image,
	StyleSheet,
	} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BackButton(){

	const navigation = useNavigation();

	const goBack = () =>{
		navigation.goBack();
	}
	return(
		<Ionicons
			name="chevron-back"
			size={28}
			color="black"
			onPress={ goBack }
			style={ styles.backIcon }
		/>
		)
	}
const styles = StyleSheet.create({
	 backIcon: {
		 marginLeft: 10,
		 },
});
