import React, { Component } from 'react';
import Link from './Link';

class Socials extends Component {
	render() {
		return (
			<div>
				<p>
					Here's some of my stuff:<br />
					<div className="github">
						<Link text={'GitHub'} url={'https://github.com/vindhya'} />
					</div>
					<div className="twitter">
						<Link text={'Twitter'} url={'https://twitter.com/_vee'} />
					</div>
					<div className="instagram">
						<Link text={'Instagram'} url={'https://www.instagram.com/vee_/'} />
					</div>
				</p>
			</div>
		);
	}
}

export default Socials;