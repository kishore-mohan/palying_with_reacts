import React from 'react'

class EventHandler extends React.Component {
	constructor(props){
		super(props)
		this.state = {name : 'Kishore'}
	}

	clickHandler = (e) =>{
		console.log(e)
		this.setState({
			name : 'Mohan'
		})
	}

	render() {
		return(
			<div>
				<button onClick={this.clickHandler}>Click Me! </button>
				<div>{this.state.name}</div>
			</div>
			)
	}
}

export default EventHandler