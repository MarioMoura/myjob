import '../globals/colors';
import {
	Animated,
	Button,
	Keyboard,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import React, {useEffect, useState} from 'react';

import DATA from '../globals/data';

export default function SearchBox({orig, setArray}) {

	const [input, setInput] = useState('');
	const [result, setResult] = useState();

	const [useUser, setUseUser] = useState(true);
	const [useTitle, setUseTitle] = useState(false);

	const Fuse = require('fuse.js')
	const setFuse = () => {
		const keys = [];
		if (useUser)
			keys.push("user");
		if (useTitle)
			keys.push("title");

		fuse = new Fuse(orig, {keys: keys});
	}

	const fuseOptions = {
		// isCaseSensitive: false,
		// includeScore: false,
		// shouldSort: true,
		// includeMatches: false,
		// findAllMatches: false,
		// minMatchCharLength: 1,
		// location: 0,
		// threshold: 0.6,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreLocation: false,
		// ignoreFieldNorm: false,
		keys: [
			"user",
		]
	};
	let fuse;
	setFuse();

	const animatedHeight = new Animated.Value(0);
	const animatedOpacity = new Animated.Value(1);

	const openButtons = () => {
		Animated.sequence([
			Animated.timing(
				animatedHeight,
				{
					toValue: 100,
					duration: 700,
					useNativeDriver: false
				}
			),
			Animated.timing(
				animatedOpacity,
				{
					toValue: 1,
					duration: 200,
					useNativeDriver: false
				}
			),
		]).start();
	}

	const closeButtons = () => {
		Animated.sequence([
			Animated.timing(
				animatedOpacity,
				{
					toValue: 0,
					duration: 500,
					useNativeDriver: false
				}
			),
			Animated.timing(
				animatedHeight,
				{
					toValue: 0,
					duration: 300,
					useNativeDriver: false
				}
			),
		]).start();
	}

	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", openButtons);

		// cleanup function
		return () => {
			Keyboard.removeListener("keyboardDidShow", openButtons);
		};
	}, []);

	useEffect(() => {
		if (typeof (result) == 'undefined') {
			console.log('nao definido');
		} else {
			console.log('definido');
			setArray(result.map(x => x.item))
		}
	}, [result]);

	useEffect(() => {
		if (input.length)
			setResult(fuse.search(input));
		else
			setArray(DATA);
	}, [input, useUser, useTitle]);

	return (
		<View style={{
			width: '90%',
		}}>
			<TextInput
				style={styles.input}
				value={input}
				placeholder="Search"
				placeholderTextColor="black"
				clearButtonMode='while-editing'
				onChangeText={
					(text) => setInput(text)
				}
				//onFocus={
				//() => openButtons()
				//}
				onBlur={
					() => closeButtons()
				}
			/>
			<Animated.View style={[styles.bottomBox, {
				maxHeight: animatedHeight.interpolate({inputRange: [0, 50, 100], outputRange: ['0%', '50%', '100%']}),
				opacity: animatedOpacity,
			}]}>
				<TouchableOpacity
					onPress={() => {setUseUser(!useUser); setFuse();}}
					style={[styles.button, {backgroundColor: useUser ? global.green : global.lightgray}]}
				>
					<Text style={styles.buttonText}>User</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {setUseTitle(!useTitle); setFuse();}}
					style={[styles.button, {backgroundColor: useTitle ? global.green : global.lightgray}]}
				>
					<Text style={styles.buttonText}>Title</Text>
				</TouchableOpacity>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		paddingVertical: 5,
		width: '100%',
		borderWidth: 1,
		borderRadius: 20,
		backgroundColor: global.lightgray,
		color: 'white',
		textAlign: 'center',
	},
	bottomBox: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginHorizontal: 3,
	},
	button: {
		marginTop: 3,
		justifyContent: 'center',
		width: '45%',
		borderRadius: 5,
	},
	buttonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 18,
	},
});
