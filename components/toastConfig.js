import '../globals/colors';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

import {
	AntDesign,
	MaterialCommunityIcons,
	MaterialIcons
} from '@expo/vector-icons';

const ToastConfig = {
	error: ({text1, text2, props, ...rest}) => (
		<View style={styles.errorBase}>
			<View style={styles.left}>
				<MaterialIcons name="announcement" size={24} color="red" />
			</View>
			<View style={styles.middle}>
				<Text style={styles.text1}>{text1}</Text>
				<Text style={styles.text2}>{text2}</Text>
			</View>
			<View style={styles.right}>
				<AntDesign name="close" size={24} color="white"
					onPress={() => Toast.hide()}
				/>
			</View>
		</View>
	),
	progress: ({text1, text2, props, ...rest}) => (
		<View style={styles.progressBase}>
			<View style={styles.left}>
				<MaterialCommunityIcons name="progress-clock" size={24} color="yellow" />
			</View>
			<View style={styles.middle}>
				<Text style={styles.text1}>{text1}</Text>
				<Text style={styles.text2}>{text2}</Text>
			</View>
			<View style={styles.right}>
				<AntDesign name="close" size={24} color="white"
					onPress={() => Toast.hide()}
				/>
			</View>
		</View>
	),
};
const styles = StyleSheet.create({
	errorBase: {
		flexDirection: 'row',
		backgroundColor: global.darkgray,
		height: 60,
		width: '90%',
		borderRadius: 10,
		borderLeftWidth: 3,
		borderLeftColor: 'red',
		paddingHorizontal: 15,
		paddingVertical: 10,
		justifyContent: 'space-between',
	},
	progressBase: {
		flexDirection: 'row',
		backgroundColor: global.darkgray,
		height: 60,
		width: '90%',
		borderRadius: 10,
		borderLeftWidth: 3,
		borderLeftColor: 'yellow',
		paddingHorizontal: 15,
		paddingVertical: 10,
		justifyContent: 'space-between',
	},
	left: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	middle: {
		flex: 5,
	},
	right: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text1: {
		color: 'white',
		marginBottom: 5,
	},
	text2: {
		color: global.lightgray,
	},
});

export default ToastConfig;
