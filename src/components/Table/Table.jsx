import React from 'react'
import style from './Table.module.css'
import './../../css/all.min.css'

const Table = props => {
const descending = "descending";
const ascending = "ascending";

	return (
		 <div className={style.data}>
			 <table>
				 <thead>
				 <tr style={{"background": "#3e60b7", "color": "#fff"}}>
					 <th>№</th>
					 <th onClick={() => {
						 if(props.sortingDirection === descending || !props.sortingDirection){
							 props.modeSort(ascending, "id");
						 }
						 if(props.sortingDirection === ascending || !props.sortingDirection){
							 props.modeSort(descending, "id");
						 }
						 props.functionSort("id");
					 }}>Id
						 {props.sortingDirection === descending && props.itemSorting === 'id'
							  ? <i className="fas fa-chevron-down"/> :
							  props.sortingDirection === ascending && props.itemSorting === 'id'
									? <i className="fas fa-chevron-up"/> :
									<i className="fas fa-sort"/>
						 }
					 </th>
					 <th onClick={() => {
						 if(props.sortingDirection === descending || !props.sortingDirection){
							 props.modeSort(ascending, "firstName");
						 }
						 if(props.sortingDirection === ascending || !props.sortingDirection){
							 props.modeSort(descending, "firstName");
						 }
						 props.functionSort("firstName");
					 }}>First Name
						 {props.sortingDirection === descending && props.itemSorting === 'firstName'
							  ? <i className="fas fa-chevron-down"/> :
							  props.sortingDirection === ascending && props.itemSorting === 'firstName'
									? <i className="fas fa-chevron-up"/> :
									<i className="fas fa-sort"/>
						 }
					 </th>
					 <th onClick={() => {
					 	props.functionSort("lastName");
						 if(props.sortingDirection === descending || !props.sortingDirection){
							 props.modeSort(ascending, "lastName");
						 }
						 if(props.sortingDirection === ascending || !props.sortingDirection){
							 props.modeSort(descending, "lastName");
						 }
					 }}>Last Name
						 {props.sortingDirection === descending && props.itemSorting === 'lastName'
							  ? <i className="fas fa-chevron-down"/> :
							  props.sortingDirection === ascending && props.itemSorting === 'lastName'
									? <i className="fas fa-chevron-up"/> :
									<i className="fas fa-sort"/>
						 }
					 </th>
					 <th onClick={() => {
					 	props.functionSort("email");
						 if(props.sortingDirection === descending || !props.sortingDirection){
							 props.modeSort(ascending, "email");
						 }
						 if(props.sortingDirection === ascending || !props.sortingDirection){
							 props.modeSort(descending, "email");
						 }
					 }}>E-mail
						 {props.sortingDirection === descending && props.itemSorting === 'email'
							  ? <i className="fas fa-chevron-down"/> :
							  props.sortingDirection === ascending && props.itemSorting === 'email'
									? <i className="fas fa-chevron-up"/> :
									<i className="fas fa-sort"/>
						 }
					 </th>
					 <th onClick={() => {
					 	props.functionSort("phone");
						 if(props.sortingDirection === descending || !props.sortingDirection){
							 props.modeSort(ascending, "phone");
						 }
						 if(props.sortingDirection === ascending || !props.sortingDirection){
							 props.modeSort(descending, "phone");
						 }
					 }}>Phone
						 {props.sortingDirection === descending && props.itemSorting === 'phone'
							  ? <i className="fas fa-chevron-down"/> :
							  props.sortingDirection === ascending && props.itemSorting === 'phone'
									? <i className="fas fa-chevron-up"/> :
									<i className="fas fa-sort"/>
						 }
					 </th>
				 </tr>
				 </thead>
				 <tbody>
				 {
					 props.dataTable.slice(props.startIndex, props.endIndex)
						  .map((res, i) => <tr key={res.phone} onClick={()=>props.setSelectedItem(res)}>
							  <td><b>{i + 1 + props.startIndex}</b></td>
							  <td>{res.id}</td>
							  <td>{res.firstName}</td>
							  <td>{res.lastName}</td>
							  <td><i>{res.email}</i></td>
							  <td>{res.phone}</td>
						  </tr>
					 )
				 }
				 </tbody>
			 </table>
		 </div>
	)
};
export default Table;