import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import Registro from '../screens/registro';

export default function LoginNav(){

	const Stack = createStackNavigator();

	return(
		<Stack.Navigator
			headerMode='none'
		>
				<Stack.Screen name="login" component={ Login } />	
				<Stack.Screen name="registro" component={ Registro } />	
		</Stack.Navigator>
		)
	}
