import React from 'react';
import { Map, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import '../styles/leaflet.css';
import '../styles/QuestMap.css';

export default function QuestMap() {
	let position = {
		lat: 13.7516,
		lng: 100.4927,
	};

	let zoom = 20;

	return (
		<div>
			<Map center={position} zoom={zoom}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Circle center={position} radius={200}></Circle>
				<Marker position={position}>
					<Popup>
						fyi Building <br /> Dreamer working here!
					</Popup>
				</Marker>
			</Map>
            <div className='bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded hint-icon hover:'>Hint found!</div>
		</div>
	);
}
