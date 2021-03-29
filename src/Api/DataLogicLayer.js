import axios from "axios";


export const dalApi = {
	getDataTable(url){
		return axios.get(url).then(response => response.data)
	}
};