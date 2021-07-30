import "../globals/colors";

import {
	Image,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons';

export default function Header({back, aboutText}) {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.container}>
			{back &&
				<Ionicons name="chevron-back" size={34} color={global.green} onPress={() => navigation.goBack()} />
			}
			<TouchableOpacity onPress={() => navigation.navigate('perfil')}>
				<Image
					source={{
						uri: "https://cdn.dribbble.com/users/458522/screenshots/4568564/kratos_1.jpg?compress=1&resize=300x300",
					}}
					style={styles.profileIcon}
				/>
			</TouchableOpacity>
			<View style={styles.textView}>
				<Text style={{opacity: 0}}></Text>

				<Text style={styles.profileNameText}>Kratos </Text>

				<View style={styles.bottomText}>
					<Entypo name="star" size={19} color={global.green} />
					<Text style={styles.scoreText}>5,0</Text>
				</View>
			</View>
			<AntDesign
				name="questioncircleo"
				size={35}
				color="white"
				style={styles.aboutIcon}
				onPress={() => setModalVisible(!modalVisible)}
			/>
			<Modal
				visible={modalVisible}
				animationType="fade"
				transparent={true}
			>
				<TouchableWithoutFeedback
					onPress={() => setModalVisible(!modalVisible)}
				>
					<View style={styles.baseModal}>
						<View style={styles.modalView}>
							<AntDesign
								name="questioncircleo"
								size={155}
								color="white"
								onPress={() => setModalVisible(!modalVisible)}
							/>
							<View style={styles.modalTextBox} >
								<Text style={styles.modalText}>
									{aboutText}
								</Text>
							</View>
						</View>
						<LinearGradient
							colors={[global.gray, 'transparent']}
							style={styles.background}
						/>
					</View>
				</TouchableWithoutFeedback >
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: global.gray,
		height: 100,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 10,
		paddingRight: 10,
	},
	profileIcon: {
		height: 50,
		width: 50,
		borderRadius: 40,
	},
	profileNameText: {
		color: "white",
		fontSize: 18,
	},
	textView: {
		marginLeft: 5,
		height: 50,
		justifyContent: "space-between",
	},
	bottomText: {
		flexDirection: "row",
		marginLeft: 2,
	},
	scoreText: {
		color: "white",
		marginTop: 2,
	},
	aboutIcon: {
		marginLeft: "auto",
	},
	baseModal: {
		flex: 1,
	},
	modalView: {
		height: '60%',
		backgroundColor: global.gray,
		padding: 35,
		alignItems: "center",
	},
	modalTextBox: {
		width: '90%',
		marginTop: 30,
		padding: 15,
		backgroundColor: global.darkgray,
		justifyContent: 'center',
		borderRadius: 10,
	},
	modalText: {
		marginVertical: 15,
		textAlign: "center",
		color: 'white',
		fontSize: 17,
	},
	background: {
		height: 20,
	},
});
