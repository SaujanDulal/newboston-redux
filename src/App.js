import React from 'react';
import './App.css';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
	return (
		<div className="App">
			<h2>Username list:</h2>
			<UserList />
			<hr />
			<h2>User Details:</h2>
			<UserDetail />
		</div>
	);
}

export default App;
