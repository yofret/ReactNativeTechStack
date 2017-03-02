//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { connect } from 'react-redux';
	import { View, ListView } from 'react-native';
	import  ListItem from './ListItem';

//-------------------------------
// LibraryList Component
//-------------------------------

	class LibraryList extends Component {
		//State
		state = {}

		//Life cycle methods
		componentWillMount() {
			const ds =  new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2
			})

			this.dataSource = ds.cloneWithRows(this.props.libraries);
		}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}

		// Methods
		renderRow(library) {
			return <ListItem library={library} />;
		}		

		// Render methods
		render() {
			return (
				<ListView
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			);
		}					
	}

//-------------------------------
// Map Redux State to component props
//-------------------------------

	const mapStateToProps = state => {
		return { libraries: state.libraries };
	};

//-------------------------------
// Export Component
//-------------------------------

	export default connect(mapStateToProps)(LibraryList);
