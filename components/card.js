import {
	StyleSheet,
	Image,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import TypeIcon from '../components/typeIcon';

import '../globals/colors';

export default function Card({item}) {
	const navigation = useNavigation();
	return (
		<View style={styles.base}>
			<View style={styles.left}>
				<Image
					source={{uri: item.photourl, }}
					style={styles.profileIcon}
				/>
			</View>
			<View style={styles.middle}>
				<Text style={styles.textUser}>{item.user}</Text>
				<Text style={styles.textTitle}>{item.title}</Text>
				<Text style={styles.textDescription} numberOfLines={2}>{item.description}</Text>
			</View>
			<View style={styles.right}>
				<TypeIcon type={item.type} size={20} />
				<Text style={styles.textDistance}>{item.distance}Km</Text>
				<TouchableOpacity style={styles.acceptButton} onPress={() => navigation.navigate('ojob', {item: item})}>
					<Text style={styles.textButton}>Aceitar</Text>
				</TouchableOpacity>

			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	base: {
		flex: 1,
		height: 60,
		flexDirection: 'row',
	},
	left: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	middle: {
		flex: 2,
		paddingHorizontal: 5,
		justifyContent: 'space-between',
	},
	right: {
		flex: 1,
		alignItems: 'flex-end',
	},
	profileIcon: {
		height: 40,
		width: 40,
		borderRadius: 10,
	},
	textUser: {
		color: global.green,
		fontSize: 15,
	},
	textTitle: {
		color: 'white',
		fontSize: 12,
	},
	textDescription: {
		color: global.lightgray,
		fontSize: 9,
	},
	typeIcon: {
		height: 20,
		width: 20,
		backgroundColor: 'white',
	},
	textDistance: {
		color: global.lightergray,
		marginVertical: 2,
		fontSize: 11,
	},
	acceptButton: {
		width: '100%',
		backgroundColor: global.green,
		alignItems: 'center',
		padding: 3,
		borderRadius: 5,
	},
	textButton: {
		color: 'white',
	},

});
