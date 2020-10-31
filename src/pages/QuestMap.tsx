import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Popup, Marker, Circle } from 'react-leaflet';
import useFirebase from '../hooks/useFirebase';
import '../styles/leaflet.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/QuestMap.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function QuestMap() {
	const [locations, setLocations] = useState([]);
	const firebase = useFirebase();

	const [position, setPosition]: [
		position: any | null,
		setPosition: any
	] = useState(null);

	const [zoom, ] = useState(80);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setPosition({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
		});
	}, []);

	useEffect(() => {
		async function fetchData () {
			const placeRef = firebase.firestore().collection('places');
			const placesDocs = await placeRef.get();
			const placesData: any = [];
			placesDocs.forEach((doc: any) => {
				placesData.push({ id: doc.id, ...doc.data() });
			});
			setLocations(placesData);
		};
		fetchData();
	}, []);

	return (
		<div>
			{locations && console.log(locations)}
			{position && (
				<>
					<Map center={position} zoom={zoom}>
						<TileLayer
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Circle center={position} radius={200}></Circle>
						<Marker position={position}>
							<Popup>
								fyi Building <br /> Dreamer working
								here!
							</Popup>
						</Marker>
						{
							locations.map(loc => {
								const pos = { lat: 0, lng: 0 };
								// pos.lat = loc.position;
								return <Marker position={position}></Marker>
							}
							)
						}
					</Map>
					<div className='bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded hint-icon hover:'>
						Hint found!
					</div>
				</>
			)}
		</div>
	);
}
