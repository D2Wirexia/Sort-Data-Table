import React from "react";
import style from './BtnLoadingData.module.css'

const BtnLoadingData = props => {

	const smallUrl = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
	const bigUrl = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

	return(
		 <div className={style.loaderDataBtn}>
			 <button onClick={()=>props.requestDataTable(smallUrl)}>Small Data</button>
			 <button onClick={()=>props.requestDataTable(bigUrl)}>Big Data</button>
		 </div>
	)
};

export default BtnLoadingData;