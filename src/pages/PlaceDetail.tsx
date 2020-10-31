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
	// const [data, setData]: [data: any, setData: any] = useState(null);
	// useEffect(() => {
	// 	const fetchPlace = async () => {
	// 		const placeRef = firebase
	// 			.firestore()
	// 			.collection('places')
	// 			.doc(id);
	// 		const doc = await placeRef.get();
	// 		setData(doc.data());
	// 	};
	// 	fetchPlace();
	// }, []);
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
