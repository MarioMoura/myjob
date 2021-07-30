import React, {useState, useRef} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	KeyboardAvoidingView,
	Image,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,

} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Swiper from 'react-native-swiper'
import '../globals/colors';
import MainIcon from '../globals/mainIcon';

export default function Registro({}) {

	const swiper_ref = useRef();
	const [mainButtonText, setMainButtonText] = useState("Entrar");
	const [screenChanged, setScreenChanged] = useState(false);

	TextInput.defaultProps = {
		clearButtonMode: 'while-editing',
	}
	const ChangeScreen = () => {
		if (!screenChanged) {
			setScreenChanged(true);
			setMainButtonText("Registrar");
			swiper_ref.current.scrollBy(1, true);
		}
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.base}>
				<View style={styles.main}>
					<Text style={styles.mainText}>Registre-se</Text>
					<Image style={styles.icon} source={MainIcon} />
					<Swiper
						ref={swiper_ref}
						style={styles.wrapper}
						scrollEnabled={false}
						showsButtons={false}
						removeClippedSubviews={false}
						activeDotColor={global.green}
					>
						<KeyboardAwareScrollView
							scrollEnabled={true}
							extraScrollHeight={-100}
						>
							<View style={styles.slide1}>
								<TextInput
									placeholder="Usuario"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
								<TextInput
									placeholder="Senha"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
								<TextInput
									placeholder="Profissao"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
								<TextInput
									placeholder="Habilidades"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
							</View>
						</KeyboardAwareScrollView>

						<KeyboardAwareScrollView
							scrollEnabled={true}
							extraScrollHeight={-100}
						>
							<View style={styles.slide1}>
								<TextInput
									placeholder="Usuario"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
								<TextInput
									placeholder="Senha"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
								<TextInput
									placeholder="Profissao"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
								<TextInput
									placeholder="Habilidades"
									placeholderTextColor={global.lightgray}
									style={styles.input}
									returnKeyType="go"
								/>
							</View>
						</KeyboardAwareScrollView>
					</Swiper>
					<View >
						<TouchableOpacity
							onPress={() => ChangeScreen()}
							style={styles.mainButton}>
							<Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>{mainButtonText}</Text>
						</TouchableOpacity>
						<View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
							<TouchableOpacity >
								<Text style={styles.sideButtonText}>Esqueceu a senha ?</Text>
							</TouchableOpacity>
							<TouchableOpacity >
								<Text style={[styles.sideButtonText, {textAlign: 'left'}]}>Trocar Conta</Text>
							</TouchableOpacity>
						</View>
					</View>
					<TouchableOpacity
					>
						<Text style={styles.bottomButtonText} >Registre-se</Text>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	base: {
		flex: 1,
		backgroundColor: global.gray,
		justifyContent: 'center',
		alignItems: 'center',
	},
	main: {
		width: '80%',
		height: '90%',
		backgroundColor: global.gray,
		justifyContent: 'space-around',
	},
	icon: {
		width: 100,
		height: 100,
		alignSelf: 'center',
	},
	mainText: {
		textAlign: 'center',
		fontSize: 30,
		color: 'white',
		marginBottom: 20,
	},
	input: {
		height: 50,
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: global.green,
		marginTop: 10,
		color: 'white',
	},
	wrapper: {
		marginTop: 15,
		marginBottom: 15,
	},
	slide1: {
		height: '75%',
		justifyContent: 'space-between',
	},
	mainButton: {
		borderRadius: 4,
		backgroundColor: global.green,
		paddingVertical: 12,
	},
	sideButtonText: {
		color: global.lightergray,
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	},
	bottomButtonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 15,
		marginTop: 15,
	},
})
