import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Azul from '../screens/types/azul';
import Amarelo from '../screens/types/amarelo';
import Verde from '../screens/types/verde';
import Vermelho from '../screens/types/vermelho';

import BackButton from '../components/backButton';

export default function TypesNav(){

	const Stack = createStackNavigator();

	return(
		<Stack.Navigator
			screenOptions={{
				headerLeft: ( props ) => { return ( <BackButton />);}
					}}
		>
				<Stack.Screen name="azul" component={ Azul } />	
				<Stack.Screen name="amarelo" component={ Amarelo } />	
				<Stack.Screen name="verde" component={ Verde } />	
				<Stack.Screen name="vermelho" component={ Vermelho } />	
		</Stack.Navigator>
		)
	}
