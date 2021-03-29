import React from "react";
import {connect} from 'react-redux'
import './App.css';
import Preloader from "./components/Preloader/Preloader";
import TableContainer from "./components/Table/TableContainer";
import {addDataTable, requestDataTable, setSearchData} from "./Redux/reducer";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import BtnLoadingData from "./components/BtnLoadingData/BtnLoadingData";
import PaginatorContainer from "./components/Paginator/PaginatorContainer";
import Search from "./components/Search/Search";
import AddElementOnData from "./components/AddElementOnData/AddElementOnData";

class App extends React.Component {
	render() {
		return (
			 <div className="App">
				 <BtnLoadingData requestDataTable={this.props.requestDataTable}/>
				 {
					 this.props.loadedData
						  ? this.props.isFetch
						      ? <Preloader/>
						      : <>
							  <Search setSearchData={this.props.setSearchData}/>
							  <AddElementOnData addDataTable={this.props.addDataTable}/>
							  <TableContainer/>
							  <PaginatorContainer/>
						      {this.props.selectedItem && <InfoBlock/>}
						      </>
						  : null
				 }
			 </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isFetch: state.reducerState.isFetch,
		selectedItem: state.reducerState.selectedItem,
		loadedData: state.reducerState.loadedData
	}
};
export default connect(mapStateToProps,
	 {requestDataTable, setSearchData, addDataTable})(App);
