//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View, Text, TouchableWithoutFeedback } from 'react-native';
	import { connect } from 'react-redux';
	import { CardSection } from './common';
	import * as actions from '../actions';

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

		// methods
		renderDescription() {
			const { library, selectedLibraryId, description } = this.props
			if(library.id === selectedLibraryId) {
				return (
					<Text>{library.description}</Text>
				)
			}
		}	

		// Render methods
		render() {
			const { titleStyle } = styles;
			const { id, title } = this.props.library

			return (
				<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
					<View>
						<CardSection>
							<Text style={titleStyle}>
								{title}
							</Text>
						</CardSection>
						{this.renderDescription()}
					</View>
				</TouchableWithoutFeedback>
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
// Map Redux State to component props
//-------------------------------

	const mapStateToProps = state => {
		return { selectedLibraryId: state.selectedLibraryId };
	};

//-------------------------------
// Export Component
//-------------------------------

	export default connect(mapStateToProps, actions)(ListItem); // if we pass the action to the connect function it will call dispatch for us
