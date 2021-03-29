import React, {useState} from "react";
import style from './AddElementOnData.module.css'

const AddElementOnData = props => {
	const [id, setId] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [street, setStreet] = useState("");
	const [zip, setZip] = useState("");
	const [description, setDescription] = useState("");

	const [addElBtn, setAddElBtn] = useState(false);

	return(
		 <div className={style.addElementTable}>
			 {
				 !addElBtn
				  ? <button onClick={()=>{
						  setAddElBtn(true);
					  }}>Create new element</button>
					  :	<div>
						  <table>
							  <tr>
								  <th colSpan={5}>Person</th>
							  </tr>
							  <tr>
								  <th>Id</th>
								  <th>First Name</th>
								  <th>Last Name</th>
								  <th>E-mail</th>
								  <th>Phone</th>
							  </tr>
							  <tr>
								  <td><input value={id} onChange={event=>setId(event.target.value)}/></td>
								  <td><input value={firstName} onChange={event=>setFirstName(event.target.value)}/></td>
								  <td><input value={lastName} onChange={event=>setLastName(event.target.value)}/></td>
								  <td><input value={email} onChange={event=>setEmail(event.target.value)}/></td>
								  <td><input value={phone} onChange={event=>setPhone(event.target.value)}/></td>
							  </tr>
							  <tr>
								  <th colSpan={5}>Address</th>
							  </tr>
							  <tr>
								  <th>City</th>
								  <th>State</th>
								  <th>Street</th>
								  <th>Zip</th>
								  <th>Description</th>
							  </tr>
							  <tr>
								  <td><input value={city} onChange={event=>setCity(event.target.value)}/></td>
								  <td><input value={state} onChange={event=>setState(event.target.value)}/></td>
								  <td><input value={street} onChange={event=>setStreet(event.target.value)}/></td>
								  <td><input value={zip} onChange={event=>setZip(event.target.value)}/></td>
								  <td><input value={description} onChange={event=>setDescription(event.target.value)}/></td>
							  </tr>

						  </table>
						  <button onClick={()=>{
							  props.addDataTable({
								  "id": Number(id),
								  "firstName": firstName,
								  "lastName": lastName,
								  "email": email,
								  "phone": phone,
								  "address": {
									  "city": city,
									  "state": state,
									  "streetAddress": street,
									  "zip": zip
								  },
								  "description": description
							  });
							  setId("");
							  setFirstName("");
							  setLastName("");
							  setEmail("");
							  setPhone("");
							  setCity("");
							  setState("");
							  setStreet("");
							  setZip("");
							  setDescription("");
						  }}>Add</button>
						  <button onClick={()=>{
							  setAddElBtn(false);
						  }}>Hide block</button>
					  </div>
			 }


		 </div>
	)
};

export default AddElementOnData;