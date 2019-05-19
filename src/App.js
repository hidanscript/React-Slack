import React, { Component } from 'react';
import './App.css';

//Components
import ChannelList from './Components/ChannelList';
import Chat from './Components/Chat';

class App extends Component {

	render() {
		return(
			<div className="App">
				<ChannelList className="menu"company="HypnotizeD Studios" channels={ ["aleatorio", "coding", "general"]}/>
				<Chat className="the-chat"/>
			</div>
		);
	}
}

export default App;