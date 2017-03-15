//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { 
		View, 
		Text, 
		TouchableWithoutFeedback,
		LayoutAnimation
	} from 'react-native';
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

		componentWillUpdate(nextProps, nextState) {
			LayoutAnimation.spring();
		}

		componentDidUpdate(prevProps, prevState) {}	

		// methods
		renderDescription() {
			const { library, expanded } = this.props
			if(expanded) {
				return (
					<CardSection>
						<Text style={{flex:1}}>
							{library.description}
						</Text>
					</CardSection>
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

	const mapStateToProps = (state, ownProps) => {
		// some kind of precalculation of our props!
		const expanded = state.selectedLibraryId == ownProps.library.id
		return { expanded };
	};

//-------------------------------
// Export Component
//-------------------------------

	export default connect(mapStateToProps, actions)(ListItem); // if we pass the action to the connect function it will call dispatch for us
