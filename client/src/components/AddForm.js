import React from 'react';
import { connect } from 'react-redux';
import { addSmurf, showError } from '../actions/index';

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			position: '',
			nickname: '',
			description: ''
		};
	}

	handleChange = e => {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const verifyName = this.props.smurfs.filter(smurf => smurf.name === this.state.name);
		console.log(verifyName);
		//checks for same name
		if (verifyName.length > 0) {
			return this.props.showError(' This name is already taken!');
		}

		// checks if name is empty
		if (this.state.name === '') {
			return this.props.showError(' Must include a name');
		}

		//check if position is empty
		if (this.state.position === '') {
			return this.props.showError(' Must include a position');
		}

		//check if nickname is empty
		if (this.state.nickname === '') {
			return this.props.showError(' Must include a nickname');
		}

		this.props.addSmurf(this.state);
		this.setState({
			name: '',
			position: '',
			nickname: '',
			description: ''
		});
	};
	render() {
		console.log(this.state, this.props.smurfs);
		return (
			<section>
				<h2>Add Smurf</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<br />
						<input onChange={this.handleChange} name="name" value={this.state.name} id="name" />
						<br />
						<br />

						<label htmlFor="name">Position:</label>
						<br />
						<input onChange={this.handleChange} name="position" value={this.state.position} id="position" />
						<br />
						<br />
						<label htmlFor="name">Nickname:</label>
						<br />
						<input onChange={this.handleChange} name="nickname" value={this.state.nickname} id="nickname" />
						<br />
						<br />
						<label htmlFor="name">Description:</label>
						<br />
						<textarea
							onChange={this.handleChange}
							name="description"
							value={this.state.description}
							id="description"
						/>
						<br />
						<br />
					</div>

					<div data-testid="errorAlert" className="alert alert-danger" role="alert">
						Error:{this.props.error}
					</div>
					<button>Submit Smurf</button>
				</form>
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		error: state.error
	};
};

const mapDispatchToProps = { addSmurf, showError };

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
