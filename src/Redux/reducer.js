import {dalApi} from "../Api/DataLogicLayer";

const SET_DATA_TABLE = 'SET_DATA_TABLE';
const SET_FETCH = 'SET_FETCH';
const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
const SET_TOTAL_VALUE_COUNT = 'SET_TOTAL_VALUE_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADED_DATA = 'SET_LOADED_DATA';
const SET_SEARCH_DATA = 'SET_SEARCH_DATA';
const ADD_DATA = 'ADD_DATA';

const initialState = {
	table: [],
	isFetch: false,
	loadedData: false,
	selectedItem: null,
	totalValueCount: null,
	currentPage: 1,
	maxCountShowingElements: 12,
	search: null,
};

const reducerState = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA_TABLE:
			return {
				...state,
				table: action.data
			};
		case SET_FETCH:
			return {
				...state,
				isFetch: action.isFetch
			};
		case SET_LOADED_DATA:
			return {
				...state,
				loadedData: true
			};
		case SET_SELECTED_ITEM:
			return {
				...state,
				selectedItem: action.item
			};
		case SET_TOTAL_VALUE_COUNT:
			return {
				...state,
				totalValueCount: action.totalValueCount
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_SEARCH_DATA:
			return {
				...state,
				search: action.search
			};
		case ADD_DATA:
			return {
				...state,
				table: [action.newData, ...state.table]
			};
		default: return state
	}
};
export const setDataTable = data => ({type: SET_DATA_TABLE, data});
export const setFetch = isFetch => ({type: SET_FETCH, isFetch});
export const setSelectedItem = item => ({type: SET_SELECTED_ITEM, item});
export const setTotalValueCount = totalValueCount => ({type: SET_TOTAL_VALUE_COUNT, totalValueCount});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setLoadedData = () => ({type: SET_LOADED_DATA});
export const setSearchData = search => ({type: SET_SEARCH_DATA, search});
export const addDataTable = newData => ({type: ADD_DATA, newData});


export const requestDataTable = (url) => async (dispatch) => {
	dispatch(setLoadedData());
	dispatch(setFetch(true));
	let data = await dalApi.getDataTable(url);
	dispatch(setDataTable(data));
	dispatch(setFetch(false));
};

export default reducerState;