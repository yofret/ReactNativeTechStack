//-------------------------------
// Redux Dependencies 
//-------------------------------

	import { combineReducers } from 'redux';
	import LibraryReducer from './LibraryReducer';

//-------------------------------
// Export Reducers 
//-------------------------------
	
	export default combineReducers({
		libraries: LibraryReducer
	});