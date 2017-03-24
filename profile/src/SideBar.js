import React, { Component } from 'react';
import AboutMe from './AboutMe';

class SideBar extends Component {
	render () {
		return (
			<div className="three columns">
				<AboutMe />
			</div>
		);
	}
}

export default SideBar;