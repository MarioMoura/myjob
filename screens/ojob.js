import '../globals/colors';

import {
	Animated,
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import {CheckBox} from 'react-native-elements'
import React, {useRef, useState} from 'react';

import {
	FontAwesome,
	MaterialCommunityIcons
} from '@expo/vector-icons';

import Header from '../components/header';
import TypeIcon from '../components/typeIcon';


export default function Ojob({route, navigation}) {

	const item = route.params.item;

	const toWidth = Dimensions.get('window').width / 2;

	const [checkArray, setCheckArray] = useState(Array(item.requirements.length).fill(false));
	const [checkCount, setCheckCount] = useState(0);

	const buttonWidth = useRef(new Animated.Value(0)).current

	const buttonOpacity = useRef(new Animated.Value(0)).current

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			// The screen is focused
			console.log('render');
			setCheckArray(Array(item.requirements.length).fill(false));
			setCheckCount(0);
			Animated.timing(buttonWidth, {
				toValue: 0, duration: 0,
				useNativeDriver: false
			}).start();
			Animated.timing(buttonOpacity, {
				toValue: 0, duration: 0,
				useNativeDriver: false
			}).start();
			console.log(checkArray);
			console.log(checkCount);
		});
		// Return the function to unsubscribe from the event so it gets removed on unmount
		return unsubscribe;
	}, [navigation]);

	React.useEffect(() => {
		if (checkCount == item.requirements.length) {
			console.log("liga!");
			Animated.timing(
				buttonWidth,
				{
					toValue: toWidth,
					duration: 1000,
					useNativeDriver: false
				}
			).start();
			Animated.timing(
				buttonOpacity,
				{
					toValue: 1,
					duration: 2000,
					useNativeDriver: false
				}
			).start();
		} else {
			Animated.timing(
				buttonOpacity,
				{
					toValue: 0,
					duration: 500,
					useNativeDriver: false
				}
			).start();
			Animated.timing(
				buttonWidth,
				{
					toValue: 0,
					duration: 1000,
					useNativeDriver: false
				}
			).start();
		}
	}, [checkCount]);



	const clickCheckBox = (index) => {
		checkArray[index] = !checkArray[index];
		if (checkArray[index])
			setCheckCount(checkCount + 1);
		else
			setCheckCount(checkCount - 1);
	}


	var key = 0;
	const getKey = () => {
		return (key++);
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

	const flatItem = ({index, item}) => {
		return (
			<View
				style={{
					flexDirection: 'row',
				}}
			>
				<CheckBox
					checked={checkArray[index]}
					onPress={() => clickCheckBox(index)}
					checkedColor={global.green}
					size={20}
					title={item}
					containerStyle={{
						backgroundColor: global.gray,
						borderWidth: 0,
						padding: 0,
						marginLeft: 0,
					}}
					textStyle={{
						fontSize: 10,
						alignSelf: 'center',
						marginBottom: 4,
						color: checkArray[index] ? global.green : 'white'
					}}
				/>
				{/*  <Text style={{
						fontSize: 10,
						alignSelf: 'center',
						marginBottom: 4,
						color: checkArray[index] ? global.green : 'white'
					}} > {item}</Text> */}
			</View>
		)
	}


	return (
		<View style={styles.base}>
			<Header
				back={true}
				aboutText="O Job"
			/>
			<View style={styles.container}>
				<Text style={styles.mainText}>Os Jobs</Text>
				<SeparatorTop />
				<View style={styles.iconView}>
					<Image
						source={{
							uri: item.photourl,
						}}
						style={styles.profileIcon}
					/>
					<TypeIcon
						type={item.type}
						style={styles.typeIcon}
						size={30}
					/>
				</View>
				<Text style={styles.textUser}>{item.user}</Text>
				<Text style={styles.textLocation}>{item.location}</Text>
				<Text style={styles.textDescription}>{item.description}</Text>
				<FlatList
					data={item.requirements}
					renderItem={flatItem}
					style={{width: '90%', marginTop: 10}}
					keyExtractor={getKey}
					showsVerticalScrollIndicator={false}
				/>
				<View style={styles.buttonBox}>
					{/* Location Button */}
					<TouchableOpacity style={styles.locationButton}>
						<MaterialCommunityIcons name="map-marker-outline" size={24} color="white" />
						<Text style={{color: 'white'}}>Localização</Text>
					</TouchableOpacity >
					{/* Proposta Button */}
					<TouchableOpacity
						onPress={() => navigation.goBack()}
						style={[styles.propostaButton, {
						}]}>
						<Animated.View style={{
							justifyContent: 'center',
							alignItems: 'center',
							opacity: buttonOpacity,
							width: buttonWidth
						}}>
							<FontAwesome style={{opacity: 1}} name="handshake-o" size={24} color="white" />
							<Text style={{color: 'white', }}>Localização</Text>
						</Animated.View>
					</TouchableOpacity >
				</View>
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
	},
	mainText: {
		width: '90%',
		color: 'white',
		textAlign: 'left',
		fontSize: 35,
	},
	iconView: {
		marginTop: 10,
	},
	profileIcon: {
		height: 150,
		width: 150,
		borderRadius: 190,
	},
	typeIcon: {
		position: 'absolute',
		bottom: 0,
		right: 20,
	},
	textUser: {
		marginTop: 15,
		color: 'white',
		fontSize: 20,
	},
	textLocation: {
		color: global.green,
		fontSize: 12,
	},
	textDescription: {
		marginTop: 15,
		width: '90%',
		color: global.lightgray,
		fontSize: 12,
	},
	buttonBox: {
		backgroundColor: global.green,
		height: 70,
		width: '100%',
		flexDirection: 'row',
	},
	locationButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	propostaButton: {
		justifyContent: 'center',
		alignItems: 'center',
	},
});
