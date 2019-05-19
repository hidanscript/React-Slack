import React, { Component } from 'react';
import './css/ChatInput.css';

class ChatInput extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: '',
			message: ''
		}
	}

	sendMessage(input) {
		
	}

	render() {
		return(
			<div className = "chat-input">
				<input type="text" placeholder="Type a message..."/>
			</div>
		);
	}

}

export default ChatInput;