//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View } from 'react-native';
	import { Provider } from 'react-redux';
	import { createStore } from 'redux';
	import reducers from './reducers';

//-------------------------------
// Name Component
//-------------------------------

	class App extends Component {
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
			return (
				<Provider store={createStore(reducers)}>
					<View />
				</Provider>
			);
		}					
	}

//-------------------------------
// Export Component
//-------------------------------

	export default App;
