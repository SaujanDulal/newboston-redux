import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
	render() {
		console.log(this.props);
		return this.props.user ? (
			<div>
				<img src={this.props.user.thumbnail} alt="" />
			</div>
		) : (
			<h4>select a user</h4>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.activeUser
	};
};

export default connect(mapStateToProps)(UserDetail);
