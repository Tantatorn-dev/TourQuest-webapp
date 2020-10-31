import React from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase';

function PlaceDetail({
	name,
	detail,
	image,
	id,
}: {
	name: string;
	detail: string;
	image: string;
	id: string;
}) {
 
	return (
		<>
			<h3>{name}</h3>
			<img src={image} width={300}></img>
			<p>{detail}</p>
			<button>
				<Link to='/map'>Map</Link>
			</button>
		</>
	);
}

export default PlaceDetail;
