import React, { Component } from 'react';
import ChatMessage from './ChatMessage';
import './css/ChatMessageList.css';

class ChatMessageList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
		};

		this.addMessage = this.addMessage.bind(this);
	}

	addMessage(e) {

		if(this._inputElement.value !== "") {
			var newMsg = { theUser: this.props.user, 
						   theMessage: this._inputElement.value, 
						   key: Date.now() 
						 }

			this.setState((prevState) => {
				return {
					messages : prevState.messages.concat(newMsg)
				};
			});
		}

		this._inputElement.value="";
		e.preventDefault();
		console.log(this.state.messages);
	}

	renderMessages(msg) {
		return <ChatMessage user={msg.theUser}
							message={msg.theMessage}
							key={msg.key}
							/>
	}

	render() {
		var msgs = this.state.messages;
		var msgList = msgs.map(this.renderMessages);

		return(
			<div className="chat-msg-list">
				<div className="msg-list">
					{msgList}
				</div>
				<div className = "chat-input">
					<form onSubmit={this.addMessage} autocomplete="off">
						<input 
						ref={(a) => this._inputElement = a}
						type="text"
						placeholder="Type a message..."
						spellCheck="false"
						id="input-chat"
						/>
						<input type="submit" className="sendForm"/>
					</form>
				</div>
			</div>
		);
	}
}

export default ChatMessageList;