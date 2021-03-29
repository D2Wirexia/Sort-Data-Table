import React from "react";
import Paginator from "./Paginator";
import {connect} from "react-redux";
import {setCurrentPage} from "../../Redux/reducer";

class PaginatorContainer extends React.Component{
	render() {
		return <Paginator {...this.props}/>
	}
}

const mapStateToProps = state => {
	return {
		totalValueCount: state.reducerState.totalValueCount,
		currentPage: state.reducerState.currentPage,
		maxCountShowingElements: state.reducerState.maxCountShowingElements,
	}
};

export default connect(mapStateToProps, {setCurrentPage})(PaginatorContainer)