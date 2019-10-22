import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

export default () => (
	<View style={styles.container}>
		<MapView
			style={styles.map}
			showsPointsOfInterest={false}
			showsUserLocation
			followsUserLocation
		>
			<MapView.Marker
				title="캐시워크"
				description="돈버는 만보기"
				coordinate={{
					latitude: 37.494150,
					longitude: 127.034487
				}}
			/>
		</MapView>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '100%'
	}
});
