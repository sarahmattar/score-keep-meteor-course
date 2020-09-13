import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class Player extends React.Component {
	render() {
		let itemClassPosition = `item item--position-${this.props.player.rank}`;

		return (
			<div key={this.props.player._id} className={itemClassPosition}>
				<div className='player'>
					<div>
						<h3 className='player__name'>
							{this.props.player.name}
						</h3>
						<p className='player__stats'>
							{this.props.player.position} with{' '}
							{this.props.player.score} point(s).
						</p>
					</div>
					<div className='player__actions'>
						<button
							className='button button--round'
							onClick={() =>
								Players.update(this.props.player._id, {
									$inc: { score: 1 },
								})
							}>
							+
						</button>
						<button
							className='button button--round'
							onClick={() =>
								Players.update(this.props.player._id, {
									$inc: { score: -1 },
								})
							}>
							-
						</button>
						<button
							className='button button--round'
							onClick={() =>
								Players.remove(this.props.player._id)
							}>
							x
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired,
	// key: React.PropTypes.object.isRequired
};
