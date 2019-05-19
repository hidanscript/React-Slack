import React, { Component } from 'react';
import './css/ChannelList.css';

class ChannelList extends Component {

	constructor(props) {
		super(props);

		this.state = { username : '', showChannels : true };

		this.createChannel = this.createChannel.bind(this);
	}

	createChannel(item) {
		if(this.state.showChannels) {
			return <li key={Date.time}>{"# " + item}</li>
		}
	}

	render() {
		var chanEntries = this.props.channels;
		var chanList = chanEntries.map(this.createChannel);

		return(
			<div className = "channel-list">
				<div className="app-info">
					<h2 id="comp-name">{this.props.company}</h2>
					<i className="fas fa-cog"></i>
				</div>

				<div className = "channels">
					<div className="channel-title" onClick={() =>  { 
						this.setState = { showChannels : true };
						console.log(this.state.showChannels);}}
						>
						<h2>Canales</h2>
						<i className="fas fa-plus-circle"></i>
					</div>
					<ul className="channel-items">
						{chanList}
					</ul>
				</div>
			</div>
		);
	}
}

export default ChannelList;