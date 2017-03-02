//-------------------------------
// Redux Dependencies 
//-------------------------------

	import { combineReducers } from 'redux';
	import LibraryReducer from './LibraryReducer';
	import SelectionReducer from './SelectionReducer'

//-------------------------------
// Export Reducers 
//-------------------------------
	
	export default combineReducers({
		libraries: LibraryReducer,
		selectedLibraryId: SelectionReducer
	});