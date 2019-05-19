import React, { Component } from 'react';

import ChatMessageList from './ChatMessageList';

class Chat extends Component {

	render() {
		return(
			<div className="Chat">
				<ChatMessageList user="hidanscript"/>		
			</div>
		);
	}
}

export default Chat;