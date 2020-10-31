import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
	InstapaperIcon,
	InstapaperShareButton,
} from 'react-share';

export default function SuccessPage() {
	return (
		<div>
			<div className='flex h-screen'>
				<div className='m-auto'>
					<h2>Quest Completed</h2>
					<h3>Share on your social network</h3>
					<FacebookShareButton
						url={'www.facebook.com'}
						quote={'Quest Completed'}
					>
						<FacebookIcon size={48} round={true} />
					</FacebookShareButton>
					<TwitterShareButton
						url={'www.twitter.com'}
						quote={'Quest Completed'}
					>
						<TwitterIcon size={48} round={true} />
					</TwitterShareButton>
				</div>
			</div>
		</div>
	);
}
