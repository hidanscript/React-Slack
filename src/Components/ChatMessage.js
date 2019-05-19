import React, { Component } from 'react';
import './css/ChatMessage.css';

class ChatMessage extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className = "chat-message">
				<p id="userMsg">{this.props.user}</p>
				<div className="message-box">
					<p>{this.props.message}</p>
				</div>
			</div>
		);
	}

}

export default ChatMessage;