import React, { Component } from 'react';

class ChatMessage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: ''
			message: ''
			date: ''
		}
	}

	sendMessage(input) {
		
	}

	render() {
		return(
			<div className = "chat-message">
				
			</div>
		);
	}

}

export default ChatMessage;