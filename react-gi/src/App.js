import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [
				{name: "Zay", number: "555-555-5555", dob: "2001-01-01"},
				{name: "Cam", number: "444-444-4444", dob: "2002-02-02"},
				{name: "Al", number: "333-333-3333", dob: "2003-03-03"}
			],
		};
	}
	render() {
		const { people } = this.state;
		return (
			<div>
				{people.map((person, index) => {
					return(
					<div key={index}> 
						<h1>Name: {person.name}</h1>
						<h2>Number: {person.number}</h2>
						<h2>D.O.B.: {person.dob}</h2>
					</div>
					)
				})}
				
			</div>
		)
	}
}


export default App;
