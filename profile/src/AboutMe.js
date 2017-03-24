import React, { Component } from 'react';
import profile from './img/profile.jpg';

export default class AboutMe extends Component {
	render() {
		return (
			<div>
				<h5>who dis?</h5>
				<img src={profile} className="u-max-full-width" alt="Vindhya by the floating gate in Japan" />
				<p>
					Currently, I'm enjoying learning about JavaScript, ES6, and React.<br />
					Sometimes, I like to eat, read, and travel, too.
				</p>
			</div>
		);
	}
}