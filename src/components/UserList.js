import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions/actionCreator';

class UserList extends Component {
	createListItem = () => {
		return this.props.users.map((user) => {
			return (
				<li onClick={() => this.props.selectUser(user)} key={user.id}>
					{user.first} {user.last}
				</li>
			);
		});
	};
	render() {
		return <ul style={{ listStyle: 'none', cursor: 'pointer' }}>{this.createListItem()}</ul>;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		selectUser: (user) => dispatch(selectUser(user))
	};
};

const mapStateToProps = (state) => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
