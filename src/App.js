import React from 'react';
import './App.css';

class App extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			message: '确定要删除？',
			onOk: false
		}
	}
	render() {
		return (
			<div>
			<Confirm
			    message = {this.state.message}
			    isOk = {(ok) => {
					this.state.onOk = ok
			    }}
			/>
			</div>
		);
	}

	async componentDidMount() {
		let value = await new Confirm({message: 'lll'})
		if (value) {
			console.log('yes')	
		} else {
			console.log('no')	
		}
	}
}

class Confirm extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			message: 'OK',
			ok: true
		}
	}
	
	render() {
		const { message, isOk } = this.props
		return (
			<div>
				{message}
				{isOk(this.state.ok)}
			</div>
		)
	}
	
	componentDidMount() {
		new Promise(resolve => {
			setTimeout(() => {
				resolve(true)
			},3000)
		})
	}
}

export default App