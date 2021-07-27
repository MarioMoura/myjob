import React, { useContext, useRef } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import AuthContext from '../globals/authContext';
import  '../globals/colors';
import MainIcon from '../globals/mainIcon';


export default function Login({ navigation }) {
	const { isLogged, setIsLogged } = useContext( AuthContext );

	const userInputRef = useRef()
	const passwdInputRef = useRef()
	
	const Log_in = () =>{
		setIsLogged( true );
		console.log(global.green);
	}
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<KeyboardAvoidingView
				style={styles.base}
			>
				{/* behavior="height" */}
				<View style={ styles.main }>
					<Text style={ styles.text }>Login</Text>
					<Image style={ styles.icon } source={MainIcon}/>
					<TextInput
						placeholder="Usuario"
						placeholderTextColor={ global.lightgray}
						style={ styles.input }
						ref={userInputRef}
						returnKeyType="next"
						onSubmitEditing={() => passwdInputRef.current.focus()}
					/>
					<TextInput
						placeholder="Senha"
						placeholderTextColor={ global.lightgray}
						style={ styles.input }
						ref={passwdInputRef}
						returnKeyType="go"
						onSubmitEditing={() => Log_in() }
					/>
					<View >
						<TouchableOpacity
							onPress={Log_in}
							style={ styles.mainButton }>
							<Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Entrar</Text>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
							<TouchableOpacity >
								<Text style={ styles.sideButtonText }>Esqueceu a senha ?</Text>
							</TouchableOpacity>
							<TouchableOpacity >
								<Text style={ [ styles.sideButtonText, { textAlign: 'left' } ]}>Trocar Conta</Text>
							</TouchableOpacity>
						</View>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate('registro')}>
						<Text style={ styles.bottomButtonText } >Registre-se</Text>
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
		height:100,
		alignSelf: 'center',
	},
	input: {
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
		color: global.lightergray ,
	},
	bottomButtonText: {
		textAlign: 'center',
		color: 'white',
		fontSize: 21,
	},
});
