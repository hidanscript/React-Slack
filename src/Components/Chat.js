import React, { Component } from 'react';

import ChatInput from './ChatInput';

class Chat extends Component {

	render() {
		return(
			<div className="Chat">
				<ChatInput/>		
			</div>
		);
	}
}

export default Chat;