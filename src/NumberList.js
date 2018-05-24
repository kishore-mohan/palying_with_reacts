import React from 'react'

class NumberList extends React.Component {
	render()
	{
		const list = this.props.num.map((num, index) => {
					return <li key={index}> {num} </li>
				})
		return(
			<ol>
				{list}
			</ol>
		)
	}
}

export default NumberList