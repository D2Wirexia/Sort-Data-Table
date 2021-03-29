import React from "react";
import {connect} from 'react-redux'
import style from './InfoBlock.module.css'

const InfoBlock = props => {
	return (
		 <div className={style.info}>
			 <table>
				 <tr>
					 <th colSpan={4}>Person</th>
				 </tr>
				 <tr>
					 <th>Id</th>
					 <th>Name</th>
					 <th>E-mail</th>
					 <th>Phone</th>
				 </tr>
				 <tr>
					 <td>{props.selectedItem.id}</td>
					 <td>{props.selectedItem.firstName + " " + props.selectedItem.lastName}</td>
					 <td>{props.selectedItem.email}</td>
					 <td>{props.selectedItem.phone}</td>
				 </tr>
				 <tr>
					 <th colSpan={4}>Address</th>
				 </tr>
				 <tr>
					 <th>City</th>
					 <th>State</th>
					 <th>Street</th>
					 <th>Zip</th>
				 </tr>
				 <tr>
					 <td>{props.selectedItem.address.city}</td>
					 <td>{props.selectedItem.address.state}</td>
					 <td>{props.selectedItem.address.streetAddress}</td>
					 <td>{props.selectedItem.address.zip}</td>
				 </tr>
				 <tr>
					 <th colSpan={4}>Description</th>
				 </tr>
				 <tr>
					 <td colSpan={4}>{props.selectedItem.description}</td>
				 </tr>
			 </table>
		 </div>
	)
};

const mapStateToProps = (state) => {
	return {
		selectedItem: state.reducerState.selectedItem
	}
};
export default connect(mapStateToProps, {})(InfoBlock);