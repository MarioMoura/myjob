import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
export default function Header() {
	return (
		<View
			style={styles.container}
		>
			<Image
				source={{uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"}}
				style={styles.profileIcon}
			/>
			<View style={styles.textView}>

				<Text style={{opacity: 0}}></Text>

				<Text >eae eae eae</Text>

				<Text >star</Text>

			</View>
			<AntDesign
				name="questioncircleo"
				size={35}
				color="black"
				style={styles.aboutIcon}
				onPress={() => console.log("eae")}
			/>
		</View>
	);

}
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'coral',
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
	},
	profileIcon: {
		height: 50,
		width: 50,
		borderRadius: 40,
	},
	textView: {
		height: 50,
		backgroundColor: 'skyblue',
		justifyContent: 'space-between',
	},
	aboutIcon: {
		marginLeft: 'auto',
	},
});
