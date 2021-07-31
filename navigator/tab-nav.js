import '../globals/colors';

import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

import Jobs from '../screens/jobs';
import Lista from '../screens/lista';
import Ojob from '../screens/ojob';
import Perfil from '../screens/perfil';
import Proposta from '../screens/proposta';

export default function TabNav() {

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: global.green,
				inactiveBackgroundColor: global.gray,
				activeBackgroundColor: global.gray,
				labelStyle: styles.labelStyle,
				style: {
					height: 70,
					justifyContent: 'flex-start',
					padding: 0,
					borderTopWidth: 0,
					borderTopColor: global.gray,
				},
			}}
		>
			<Tab.Screen
				name="lista"
				component={Lista}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<View style={[styles.buttonView, {borderTopColor: focused ? global.green : global.gray}]} >
							<FontAwesome5 name="list-alt" size={size} color={color} />
						</View>
					),
				}}

			/>
			<Tab.Screen
				name="jobs"
				component={Jobs}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<View style={[styles.buttonView, {borderTopColor: focused ? global.green : global.gray}]} >
							<FontAwesome5 name="check-circle" size={size} color={color} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="perfil"
				component={Perfil}
				options={{
					tabBarIcon: ({focused, color, size}) => (
						<View style={[styles.buttonView, {borderTopColor: focused ? global.green : global.gray}]} >
							<FontAwesome name="user-circle" size={size} color={color} />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="ojob"
				component={Ojob}
				options={{
					// no button
					tabBarButton: () => (null),
				}}
			/>
			<Tab.Screen
				name="proposta"
				component={Proposta}
				options={{
					// no button
					tabBarButton: () => (null),
				}}
			/>
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({
	labelStyle: {
		fontSize: 15,
		marginBottom: 10,
	},
	buttonView: {
		height: '100%',
		borderTopWidth: 3,
		width: 80,
		alignItems: 'center',
		padding: 5,
		justifyContent: 'flex-end',
	}
});
