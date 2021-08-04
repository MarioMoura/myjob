import {
	Animated,
	Button,
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {AntDesign} from '@expo/vector-icons';

import Card from './card';

export default function SubList({title, color, array}) {


	const [closed, setClosed] = useState(false);

	const Separator = () => {
		return (
			<View
				style={styles.separator}>
			</View >
		);
	}

	const flatItem = ({item}) => {
		return (
			<TouchableOpacity onPress={() => console.log('éae')}>
				<Card item={item} disableAccept={true} />
			</TouchableOpacity>
		)
	}

	const styles = StyleSheet.create({
		base: {
			width: '90%',
			marginBottom: 15,
		},
		separator: {
			backgroundColor: color,
			height: 2,
			width: '100%',
			marginVertical: 2,
			borderRadius: 20,
		},
		mainText: {
			marginTop: 2,
			color: color,
			fontSize: 19,
		},
		subButton: {
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	});

	const gHeight = new Animated.Value(100);



	//useEffect(() => {
	//if (closed)
	//closeList();
	//else
	//openList()
	//}, [closed]);

	const closeList = () => {
		Animated.timing(
			gHeight,
			{
				toValue: 0,
				duration: 1000,
				useNativeDriver: false
			}
		).start();
	}

	const openList = () => {
		Animated.timing(
			gHeight,
			{
				toValue: 100,
				duration: 1000,
				useNativeDriver: false
			}
		).start();
	}

	const toggle = () => {
		if (gHeight.__getValue() == 100) {
			closeList();
		}
		if (gHeight.__getValue() == 0) {
			openList();
		}
	}

	return (
		<View style={styles.base} >
			<TouchableOpacity style={styles.button} onPress={() => toggle()}>
				<View style={styles.subButton}>
					<Text style={styles.mainText}>{title}</Text>
				</View>
				<Separator />
			</TouchableOpacity>
			<Animated.View
				style={{maxHeight: gHeight.interpolate({inputRange: [0, 50, 100], outputRange: ['0%', '50%', '100%']})}}
			>
				<FlatList
					data={array}
					renderItem={flatItem}
					ItemSeparatorComponent={Separator}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					scrollEnabled={false}
				/>
			</Animated.View>
			<Separator />
		</View >
	);
}
