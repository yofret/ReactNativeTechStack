//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Text } from 'react-native';
	import { CardSection } from './common';

//-------------------------------
// Name Component
//-------------------------------

	class ListItem extends Component {
		//State
		state = {}

		//Life cycle methods
		componentWillMount() {}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}		

		// Render methods
		render() {
			const { titleStyle } = styles;

			return (
				<CardSection>
					<Text style={titleStyle}>{this.props.library.title}</Text>
				</CardSection>
			);
		}					
	}

	const styles = {
		titleStyle: {
			fontSize: 18,
			paddingLeft: 15
		}
	}

//-------------------------------
// Export Component
//-------------------------------

	export default ListItem;
