import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPositions } from "./../imports/api/players";
import App from "./../imports/ui/App";


import "./main.html";

Meteor.startup(() => {

	Tracker.autorun(() => {

		let players = Players.find({}, {sort: {score: -1}}).fetch();
		let name = "Sarah";
		let title = "Score Keep";
		let subtitle = `Welcome, ${name}!`;
		let playerPosition = calculatePlayerPositions(players);
		
		ReactDOM.render(<App title={title} players={playerPosition}/>, document.getElementById("app"));
			
	}); //end tracker
});