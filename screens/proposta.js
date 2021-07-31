import '../globals/colors';

import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import {
	FontAwesome,
	Ionicons,
	MaterialIcons
} from '@expo/vector-icons';

import Header from '../components/header';

export default function Proposta({navigation}) {

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


	return (
		<View style={styles.base}>
			<Header
				back={true}
				aboutText="O Job"
			/>
			<View style={styles.container}>
				<Text style={styles.mainText}>A Proposta</Text>
				<SeparatorTop />
				<View style={styles.mainBox}>

					<View style={styles.topBox}>
						<Text style={styles.boxMainText}>Digite Seu Valor</Text>
						<TextInput
							style={styles.input}
							placeholder="R$ 00,00"
							placeholderTextColor={global.green}
						/>
					</View>

					<View style={styles.bottomBox}>
						<Text style={styles.boxBottomText}>Anexos:</Text>
						<View style={styles.iconsSharedView}>
							<View style={styles.iconsView} >
								<FontAwesome name="camera" size={27} color="white" />
							</View>
							<View style={styles.iconsView} >
								<Ionicons name="document" size={27} color="white" />
							</View>
							<View style={styles.iconsView} >
								<MaterialIcons name="chat-bubble" size={27} color="white" />
							</View>
						</View>
					</View>
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
	mainBox: {
		width: '80%',
		height: '60%',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: global.grayish,
	},
	topBox: {
		width: '80%',
		height: '30%',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: global.grayish,
	},
	bottomBox: {
		width: '80%',
		height: '30%',
		alignItems: 'center',
		justifyContent: 'space-around',
		//backgroundColor: global.grayish,
	},
	boxMainText: {
		color: 'white',
		fontSize: 25,
	},
	input: {
		color: 'white',
		height: '60%',
		width: '80%',
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: global.green,
		fontSize: 25,
	},
	boxBottomText: {
		color: 'white',
		fontSize: 16,
		textAlign: 'auto',
	},
	iconsSharedView: {
		flexDirection: 'row',
		width: '100%',
		paddingVertical: 5,
		justifyContent: 'space-around',

	},
	iconsView: {
		paddingLeft: 2,
		height: 50,
		width: 50,
		borderRadius: 40,
		backgroundColor: global.gray,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
