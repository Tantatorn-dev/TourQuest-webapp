import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Popup, Marker, Circle } from 'react-leaflet';
import '../styles/leaflet.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/QuestMap.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function QuestMap() {
	const [position, setPosition]: [
		position: any | null,
		setPosition: any
	] = useState(null);

	const [zoom, setZoom] = useState(80);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setPosition({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
		});
	}, []);

	return (
		<div>
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
					</Map>
					<div className='bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded hint-icon hover:'>
						Hint found!
					</div>
				</>
			)}
		</div>
	);
}
