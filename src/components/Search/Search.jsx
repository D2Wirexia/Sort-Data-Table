import React, {useState} from "react";
import './../../css/all.min.css'
import style from './Search.module.css'

const Search = props => {
	const [value, setValue] = useState("");
	return (
		 <div className={style.searchPanel}>
			<input value={value} placeholder="Enter first name..."
					 onChange={event => setValue(event.target.value)}/>
			<button onClick={()=>props.setSearchData(value)}>
				<i className="fas fa-search"/>
			</button>
		 </div>
	)
};

export default Search;