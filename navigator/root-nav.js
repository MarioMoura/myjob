
import React, { useState, createContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginNav from './login-nav';
import TabNav from './tab-nav';
import TypesNav from './types-nav';

import AuthContext from '../globals/authContext';

export default function RootNav(){


	const [isLogged, setIsLogged] = useState(false);

	const Wrap = createBottomTabNavigator();

	return( 
	<NavigationContainer >
		<AuthContext.Provider value={{ isLogged, setIsLogged }}>
			<Wrap.Navigator tabBar={ () => { return null }} >
				{ isLogged === true 
				?
					<>
						<Wrap.Screen name="tabNav" component={ TabNav}/>
						<Wrap.Screen name="typesNav" component={ TypesNav}/>
					</>
				:
					<Wrap.Screen name="loginNav" component={ LoginNav} />
				}
			</Wrap.Navigator>
		</AuthContext.Provider>
	</NavigationContainer>
		)

	}
