import React from 'react';

import { Link } from 'react-router-dom';

function PlaceDetail(props: any) {
	return (
		<>
			<h3>Wat Phra Keaw</h3>
			<img
				src={
					'https://lp-cms-production.imgix.net/2019-06/f38562393be73d571e111dbd0b060d58-wat-phra-kaew.jpg'
				}
				width={300}
			></img>
			<p>
				Interdum et malesuada fames ac ante ipsum primis in
				faucibus. Fusce leo augue, imperdiet sit amet odio a,
				imperdiet condimentum ante. Integer nec leo id nibh
				elementum posuere. Morbi vel lacus orci. Sed eget augue
				aliquet velit consectetur egestas id quis velit. Nulla
				facilisi. Etiam ac nisl a ligula tempor porta.
			</p>
			<button>
				<Link to='/map'>Map</Link>
			</button>
		</>
	);
}

export default PlaceDetail;
