import {
	FlatList,
	RefreshControl,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import React, {useState} from 'react';

import Card from '../components/card';
import DATA from "../globals/data";
import Header from "../components/header";
import LoadCard from '../components/loadCard';

export default function Lista({navigation}) {


	const fetchArray = [1, 2, 3, 4];
	var key = 0;
	const getKey = () => {
		return (key++).toString();
	}

	const [refreshing, setRefreshing] = useState(false);

	const wait = (timeout) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	}

	const Refresh = () => {
		setRefreshing(true);
		wait(2000).then(() => {
			setRefreshing(false);
			global.fetched = true;
		});
	}

	const Separator = () => {
		return (
			<View
				style={{
					backgroundColor: global.lightgray,
					height: 2,
					marginVertical: 10,
					borderRadius: 20,
				}}>
			</View>
		);
	}

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

	const flatItem = ({item}) => {
		return (
			<TouchableOpacity onPress={() => console.log('éae')}>
				<Card item={item} />
			</TouchableOpacity>
		)
	}
	const fetchFlatItem = () => {
		return (
			<View >
				<LoadCard />
			</View>
		)
	}

	function ShowList() {
		if (global.fetched === true) {
			return (
				<FlatList
					data={DATA}
					renderItem={flatItem}
					ItemSeparatorComponent={Separator}
					style={{width: '90%'}}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					refreshControl={
						<RefreshControl
							tintColor={global.green}
							colors={global.green}
							refreshing={refreshing}
							onRefresh={() => Refresh()}
						/>
					}
				/>
			);
		} else {
			return (
				<FlatList
					data={fetchArray}
					renderItem={fetchFlatItem}
					ItemSeparatorComponent={Separator}
					style={{width: '90%'}}
					showsVerticalScrollIndicator={false}
					keyExtractor={getKey}
					refreshControl={
						<RefreshControl
							tintColor={global.green}
							colors={global.green}
							refreshing={refreshing}
							onRefresh={() => Refresh()}
						/>
					}
				/>
			);
		}
	}


	return (
		<View style={styles.base}>
			<Header
				aboutText="Lista Page"
			/>
			<View style={styles.container}>
				<Text style={styles.mainText}>Os Jobs</Text>
				<SeparatorTop />
				<ShowList />
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
		justifyContent: "center",
	},
	mainText: {
		width: '90%',
		color: 'white',
		textAlign: 'left',
		fontSize: 35,
	}
});
