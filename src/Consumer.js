import React from 'react';
import { Context } from './App';
const Consumer = (props) => {
	console.log(props);
	return (
		<div>
			<Context.Consumer>{(data) => data.map((member, i) => <li key={i}>{member.username}</li>)}</Context.Consumer>
		</div>
	);
};
export default Consumer;
