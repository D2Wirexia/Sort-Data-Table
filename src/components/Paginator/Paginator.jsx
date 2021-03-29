import React, {useState} from "react";
import style from './Paginator.module.css'
import './../../css/all.min.css'

const Paginator = props => {

	let pageCount = Math.ceil(props.totalValueCount / props.maxCountShowingElements);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	const portionSize = 10;
	let portionCount = Math.ceil(pageCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	const disabledBtn = {
		background: "#243d74",
		cursor: "auto",
		color: "#b1b1b1",
		opacity: 0.3
	};
	return(
		 <div className={style.paginator}>
			 {
				 props.totalValueCount >= props.maxCountShowingElements &&
				 <button disabled={portionNumber <= 1} style={portionNumber <= 1 ? disabledBtn : null}
							onClick={() => setPortionNumber(portionNumber - 1)}>
					 <i className="fas fa-chevron-left"/></button>
			 }
			 {
				 props.totalValueCount >= props.maxCountShowingElements && pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					 .map(p => <span key={p}
											className={props.currentPage === p ? style.activePage : ""}
											onClick={()=>props.setCurrentPage(p)}>{p}</span>)
			 }
			 {
				 props.totalValueCount >= props.maxCountShowingElements &&
				 <button disabled={portionNumber >= portionCount}
							style={portionNumber >= portionCount ? disabledBtn : null}
							onClick={() => setPortionNumber(portionNumber + 1)}>
					 <i className="fas fa-chevron-right"/></button>
			 }
		 </div>
	)
};

export default Paginator;