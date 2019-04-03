import React, { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';
import Consumers from './Consumer';

export const Context = React.createContext();

const App = () => {
	const [ users, setUsers ] = useState([]);

	useEffect(async () => {
		let { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(data);
	}, []);

	return (
		<div>
			<Context.Provider value={users}>
				<Consumers />
			</Context.Provider>
		</div>
	);
};

export default App;
