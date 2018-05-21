import React from 'react'

class EventHandler extends React.Component {
	constructor(props){
		super(props)
		this.state = {toggle: true, first_name : 'Kishore', last_name : 'Mohan' }
	}

	clickHandler = (e) => {
		console.log(e)
		this.setState((prevStage, props) => {
			console.log(prevStage)
			return {
				first_name : 'Mohan',
				last_name : 'Kishore'
			} 
		})

		this.setState((prevStage, props) => {
			return {
				toggle : !prevStage.toggle
			}
		})
	}

	render() {
		return(
			<div>
				<button onClick={this.clickHandler}>Click Me! </button>
				<div>{this.state.first_name} {this.state.last_name}</div>
				<div>{this.state.toggle ? 'ON' : 'OFF'}</div>
			</div>
			)
	}
}

export default EventHandler