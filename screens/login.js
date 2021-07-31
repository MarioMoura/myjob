import '../globals/colors';

import {Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import Toast from 'react-native-toast-message'

import AuthContext from '../globals/authContext';
import MainIcon from '../globals/mainIcon';


export default function Login({navigation}) {
	const {isLogged, setIsLogged} = useContext(AuthContext);
	const [user, setUser] = useState();
	const [password, setPassword] = useState();
	const userInputRef = useRef()
	const passwdInputRef = useRef()

	const wait = (timeout) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	}

	const Log_in = () => {
		setIsLogged(true);
		return 0;
		Toast.show({
			type: 'progress',
			text1: 'Loggin in...',
			text2: 'Trying to log in',
		});
		wait(2000).then(
			() => {
				if (user === "Mario" && password === "12345") {
					setIsLogged(true);
				} else {
					Toast.show({
						type: 'error',
						text1: 'Could not log in',
						text2: 'Wrong password or user',
					});
				}
			});
	}
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView
				style={styles.base}
			>
				{/* behavior="height" */}
				<View style={styles.main}>
					<Text style={styles.text}>Login</Text>
					<Image style={styles.icon} source={MainIcon} />
					<TextInput
						placeholder="Usuario"
						placeholderTextColor={global.lightgray}
						style={styles.input}
						ref={userInputRef}
						returnKeyType="next"
						onSubmitEditing={() => passwdInputRef.current.focus()}
						clearButtonMode='while-editing'
						onChangeText={(text) => setUser(text)}
					/>
					<TextInput
						placeholder="Senha"
						placeholderTextColor={global.lightgray}
						style={styles.input}
						ref={passwdInputRef}
						returnKeyType="go"
						onSubmitEditing={() => Log_in()}
						onChangeText={(text) => setPassword(text)}
						clearButtonMode='while-editing'
						secureTextEntry={true}
					/>
					<View >
						<TouchableOpacity
							onPress={Log_in}
							style={styles.mainButton}>
							<Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>Entrar</Text>
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
					<TouchableOpacity onPress={() => navigation.navigate('registro')}>
						<Text style={styles.bottomButtonText} >Registre-se</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
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
		height: '75%',
		backgroundColor: global.gray,
		justifyContent: 'space-between',
	},
	text: {
		textAlign: 'center',
		fontSize: 30,
		color: 'white',
	},
	icon: {
		width: 100,
		height: 100,
		alignSelf: 'center',
	},
	input: {
		color: 'white',
		height: 40,
		textAlign: 'center',
		borderBottomWidth: 1,
		borderBottomColor: global.green,
	},
	mainButton: {
		borderRadius: 4,
		backgroundColor: global.green,
		paddingVertical: 12,
	},
	sideButtonText: {
		color: global.lightergray,
	},
	bottomButtonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 21,
	},
});
