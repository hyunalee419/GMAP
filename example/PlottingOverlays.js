import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-maps';

const ipaRegion = {
	coordinate: [
		{ latitude: 37.494173, longitude: 127.034501 },
		{ latitude: 37.497844, longitude: 127.027632 },
		{ latitude: 37.500633, longitude: 127.036440 },
	],
	strokeColor: 'coral',
	strokeWidth: 4,
};

export default class PlottingOverlays extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text>IPA Fans</Text>
					<Text>Stout Fans</Text>
				</View>
				<MapView
					style={styles.map}
					showsPointsOfInterest={false}
					showsUserLocation
					followsUserLocation
				>
					<MapView.Polygon
						coordinates={ipaRegion.coordinate}
						strokeColor={ipaRegion.strokeColor}
						strokeWidth={ipaRegion.strokeWidth}
					/>
				</MapView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '80%',
	}
});
