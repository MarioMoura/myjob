import '../globals/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import Toast from 'react-native-toast-message';

import AuthContext from '../globals/authContext';
import LoginNav from './login-nav';
import TabNav from './tab-nav';
import TypesNav from './types-nav';
import ToastConfig from '../components/toastConfig';

export default function RootNav() {


	const [isLogged, setIsLogged] = useState(false);

	const Wrap = createBottomTabNavigator();

	return (
		<NavigationContainer >
			<AuthContext.Provider value={{isLogged, setIsLogged}}>
				<Wrap.Navigator tabBar={() => {return null}} >
					{isLogged === true
						?
						<>
							<Wrap.Screen name="tabNav" component={TabNav} />
							<Wrap.Screen name="typesNav" component={TypesNav} />
						</>
						:
						<Wrap.Screen name="loginNav" component={LoginNav} />
					}
				</Wrap.Navigator>
			</AuthContext.Provider>
			<Toast config={ToastConfig} ref={(ref) => Toast.setRef(ref)} />
		</NavigationContainer>
	)

}
