import '../globals/colors'

import {
	Animated,
	FlatList,
	StyleSheet,
	Text,
	View
} from 'react-native';
import React, {useState} from 'react';

import DATA from '../globals/data';
import Header from '../components/header';
import SubList from '../components/subList';

export default function Jobs({}) {

	const [jobs, setJobs] = useState({
		confirmados: [2, 3],
		naoconfirmados: [1, 4],
		negados: [5, 6],
	});

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
	const renderItem = ({item}) => (
		<SubList
			title={item.title}
			color={item.color}
			array={item.array}
		/>
	);

	return (
		<Animated.View style={styles.base}>
			<Header
				aboutText="Lista Page"
			/>
			<View style={styles.container}>
				<Text style={styles.mainText}>Meus Jobs</Text>
				<SeparatorTop />
				<FlatList
					style={{width: '100%', }}
					data={[
						{key: "1", title: "Confirmados", color: "green", array: DATA.filter(item => jobs.confirmados.includes(item.id))},
						{key: "2", title: "Nao Confirmados", color: global.green, array: DATA.filter(item => jobs.naoconfirmados.includes(item.id))},
						{key: "3", title: "Negados", color: "orange", array: DATA.filter(item => jobs.negados.includes(item.id))},
					]}
					renderItem={renderItem}
				//contentContainerStyle={{alignItems: 'center', width: '100%'}}
				/>
				{/* <SubList
						title="Confirmados"
						color="green"
						array={DATA.filter(item => jobs.confirmados.includes(item.id))}
					/>
					<SubList
						title="Nao Confirmados"
						color={global.green}
						array={DATA.filter(item => jobs.naoconfirmados.includes(item.id))}
					/>
					<SubList
						title="Negados"
						color="orange"
						array={DATA.filter(item => jobs.negados.includes(item.id))}
					/> */}
			</View>
		</Animated.View>
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
	},
	mainText: {
		width: '90%',
		color: 'white',
		textAlign: 'left',
		fontSize: 35,
	}
});
