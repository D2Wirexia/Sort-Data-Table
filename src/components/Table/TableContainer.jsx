import React from "react";
import Table from "./Table";
import {connect} from 'react-redux'
import {setSelectedItem, setTotalValueCount} from "../../Redux/reducer";

class TableContainer extends React.Component{
	state = {
		dataTable: this.props.table,
		sortingDirection: "descending",
		itemSorting: 'id',
		startIndex: this.props.maxCountShowingElements * this.props.currentPage - this.props.maxCountShowingElements,
		endIndex: this.props.maxCountShowingElements * this.props.currentPage - 1,
	};
	componentDidMount() {
		this.setState({
			dataTable: this.props.table.concat().sort(function (a, b) {
				if (a['id'] < b['id']) return -1;
				if (a['id'] > b['id']) return 1;
				return 0
			})
		})
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.currentPage !== this.props.currentPage){
			this.setState({
				startIndex: this.props.maxCountShowingElements * this.props.currentPage - this.props.maxCountShowingElements,
				endIndex: this.props.maxCountShowingElements * this.props.currentPage - 1,
			})
		}
		if(prevProps.table !== this.props.table){
			this.setState({
				dataTable: this.props.table
			})
		}
	}

	modeSort = (direction, el) => {
		this.setState({
			sortingDirection: direction,
			itemSorting: el
		})
	};

	functionSort = (item) => {
		const sortData = this.props.table.concat();
		if (this.state.sortingDirection === "descending") {
			sortData.sort(function (a, b) {
				if (a[item] < b[item]) return -1;
				if (a[item] > b[item]) return 1;
				return 0
			});
			this.setState({
				dataTable: sortData
			})
		}
		if (this.state.sortingDirection === "ascending") {
			sortData.sort(function (a, b) {
				if (a[item] < b[item]) return 1;
				if (a[item] > b[item]) return -1;
				return 0
			});
			this.setState({
				dataTable: sortData
			})
		}
	};

	render() {
		let dti;
		if(!this.props.search){
			dti = this.state.dataTable.concat();
			this.props.setTotalValueCount(dti.length);
		}
		if(this.props.search){
			dti = this.state.dataTable.concat().filter(el => el['firstName'].toLowerCase().includes(this.props.search.toLowerCase()));
			this.props.setTotalValueCount(dti.length);
		}
		return <Table dataTable={dti} sortingDirection={this.state.sortingDirection}
						  modeSort={this.modeSort} itemSorting={this.state.itemSorting}
						  functionSort={this.functionSort} setSelectedItem={this.props.setSelectedItem}
						  startIndex={this.state.startIndex} endIndex={this.state.endIndex}
						  search={this.props.search} setTotalValueCount={this.props.setTotalValueCount}/>
	}
}


const mapStateToProps = (state) => {
	return {
		table: state.reducerState.table,
		maxCountShowingElements: state.reducerState.maxCountShowingElements,
		currentPage: state.reducerState.currentPage,
		search: state.reducerState.search
	}
};

export default connect(mapStateToProps, {setSelectedItem, setTotalValueCount})(TableContainer);