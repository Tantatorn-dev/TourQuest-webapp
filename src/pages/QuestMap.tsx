import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Popup, Marker, Circle } from 'react-leaflet';
import Modal from 'react-modal';
import useFirebase from '../hooks/useFirebase';
import '../styles/leaflet.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/QuestMap.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Cat from '../assets/cat.jpg';
import { Link } from 'react-router-dom';
import Hint from '../components/Hint';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function QuestMap() {
	const [locations, setLocations] = useState([]);
	const firebase = useFirebase();
	const [isOpen, setIsOpen] = useState(false);

	const [position, setPosition]: [
		position: any | null,
		setPosition: any
	] = useState(null);

	const [zoom] = useState(80);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setPosition({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
		});
	}, []);

	useEffect(() => {
		async function fetchData() {
			const placeRef = firebase.firestore().collection('places');
			const placesDocs = await placeRef.get();
			const placesData: any = [];
			placesDocs.forEach((doc: any) => {
				placesData.push({ id: doc.id, ...doc.data() });
			});
			setLocations(placesData);
		}
		fetchData();
	}, []);

	return (
		<div>
			{position && !isOpen && (
				<>
					<Map center={position} zoom={zoom}>
						<TileLayer
							url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
							attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						/>
						<Circle center={position} radius={200}></Circle>
						<Marker position={position}>
							<Popup>
								<p>
									fyi Building <br /> Dreamer working
								here!
								</p>
							</Popup>
						</Marker>
						{locations.map(({ position, id, name, detail, image }: { position: any, id: any, name:any, detail:any, image:any }) => {
							const pos = { lng: position.c_, lat: position.h_ };
							return (
								<div>
								<Marker position={pos}>
									<Popup>
										<Link to={{pathname:"/detail", state:{id:id, name:name, detail:detail, image:image}}} >
											<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">click here to see detail</button>
										</Link>
									</Popup>
								</Marker>
								</div>
								);
						})}
					</Map>
					<Hint />
				</>
			)}
		</div>
	);
}
