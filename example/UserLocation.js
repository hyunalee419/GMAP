import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from "react-native-maps";

export default () => (
	<View style={ styles.container }>
		<MapView
			style={ styles.map }
			showsUserLocation
			followsUserLocation
		/>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		height: '100%',
		width: '100%'
	}
});
