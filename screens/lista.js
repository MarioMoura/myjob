import {
	FlatList,
	Keyboard,
	RefreshControl,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from 'react-native';
import React, {useState} from 'react';

import Card from '../components/card';
import DATA from "../globals/data";
import Header from "../components/header";
import LoadCard from '../components/loadCard';
import SearchBox from '../components/searchBox';

export default function Lista({navigation}) {

	const [mainArray, setMainArray] = useState(DATA);

	const original = DATA;

	const fetchArray = [
		{id: 1},
		{id: 2},
		{id: 3},
		{id: 4},
	];
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
			global.fetched = true;
			setRefreshing(false);
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
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View
					style={{
						backgroundColor: global.lightgray,
						height: 2,
						width: '90%',
						marginVertical: 10,
						borderRadius: 20,
					}}>
				</View>
			</TouchableWithoutFeedback>
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

	return (
		<View style={styles.base}>
			<Header
				aboutText="Lista Page"
			/>
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
					<Text style={styles.mainText}>Os Jobs</Text>
				</TouchableWithoutFeedback>
				<SeparatorTop />
				<SearchBox
					orig={original}
					setArray={setMainArray}
				/>
				<SeparatorTop />
				<FlatList
					onStartShouldSetResponder={() => false}
					scrollEnabled={true}
					data={global.fetched ? mainArray : fetchArray}
					renderItem={global.fetched ? flatItem : fetchFlatItem}
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
