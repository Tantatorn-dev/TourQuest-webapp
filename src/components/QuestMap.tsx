import React from 'react';
import { Map, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Appbar from "./Appbar";

export default function QuestMap() {

    let position = {
        lat: 13.7516,
        lng: 100.4927
    }

    let zoom = 17

    return (
        <div>
            <Appbar />
            <Map center={position} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Circle center={position} radius={200}>
                </Circle>
            </Map>
        </div>
    )
}