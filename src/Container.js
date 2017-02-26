import React, { Component } from 'react';
import MenuBar from './MenuBar.js'
import './App.css';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'home'
		}
	}

	render() {
		const menuItems = [
			{title: 'Home', classes: 'menu-main', action: () => {this.setState({display: 'home'})}, status: 'enabled'},
			{title: 'Our products', classes: 'menu-opt', action: () => {this.setState({display: 'products'})}, status: 'enabled'},
			{title: 'About us', classes: 'menu-opt', action: () => {this.setState({display: 'aboutUs'})}, status: 'enabled'},
			{title: 'Special offers', classes: 'menu-opt', action: () => {this.setState({display: 'specialOffers'})}, status: 'disabled'}
		]
		return (
			<div className="container">
				<MenuBar items={menuItems}/>
				<div className='main'>
					<p>You are now viewing page: {this.state.display}</p>
				</div>
			</div>
		);
	}
}

export default Container;