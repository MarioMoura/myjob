import {StyleSheet, View} from 'react-native';
import React from 'react';


export default function LoadCard({}) {
	return (
		<View style={styles.base}>
			<View style={styles.left}>
				<View
					style={styles.profileIcon}
				/>
			</View>
			<View style={styles.middle}>
				<View style={styles.textUser}></View>
				<View style={styles.textTitle}></View>
				<View style={styles.textDescription}></View>
				<View style={styles.textDescription}></View>
			</View>
			<View style={styles.right}>
				<View style={styles.acceptButton} >
				</View>
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
		justifyContent: 'space-between',
	},
	right: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	},
	profileIcon: {
		opacity: 0.5,
		height: 40,
		width: 40,
		borderRadius: 10,
		backgroundColor: 'gray',
	},
	textUser: {
		opacity: 0.5,
		height: '22%',
		width: '50%',
		backgroundColor: 'gray',
		borderRadius: 5,
	},
	textTitle: {
		opacity: 0.5,
		height: '15%',
		width: '70%',
		backgroundColor: 'gray',
		borderRadius: 5,
	},
	textDescription: {
		opacity: 0.5,
		height: '5%',
		width: '90%',
		backgroundColor: 'gray',
		borderRadius: 5,
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
		opacity: 0.5,
		width: '100%',
		height: '37%',
		backgroundColor: global.green,
		alignItems: 'center',
		padding: 3,
		borderRadius: 5,
	},
	textButton: {
		color: 'white',
	},

});
