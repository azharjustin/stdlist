import React, { useState } from 'react';
import './App.css';


function App() {
  const [inputarr,setInputarr]=useState([])
  const [inputdata, setInputdata] = useState({
    name:"",
    department:"",
    email:"",
    mobile:"",
    address:""
  })
  function changehandle(e) {
    setInputdata({ 
      ...inputdata,[e.target.name]:e.target.value 
    })
  }
    let {name,department,email,mobile,address}=inputdata;
   function changhandle(){
     setInputarr([...inputarr,{name,department,email,mobile,address}])
     console.log(inputarr);
     console.log(inputdata); 
     setInputdata({name:"",department:"",email:"",mobile:"",address:""})
   }
  return (
    <div className="App">
      <input type="text" autoComplete='off' name="name" value={inputdata.name} onChange={changehandle} placeholder="Enter name" />
      <input type="text" autoComplete='off' name="department" value={inputdata.department} onChange={changehandle} placeholder="Enter department" />
      <input type="email" autoComplete='off' name="email" value={inputdata.email} onChange={changehandle} placeholder="Enter email" />
      <input type="number" autoComplete='off' name="mobile" value={inputdata.mobile} onChange={changehandle} placeholder="Enter mobile" />
      <input type="text" autoComplete='off' name="address" value={inputdata.address} onChange={changehandle} placeholder="Enter address" />

      <button onClick={changhandle}>Add student</button>   
   
  <table border={1} width='30%' cellPadding={10}>
    <tbody>
      <tr>
        <td>Name</td>
        <td>Department</td>
        <td>Emali</td>
        <td>Mobile</td>
        <td>Address</td>
      </tr>
      {
        inputarr.map(
          (info,ind)=>{
            return(
              <tr key={ind}>
              <td>{info.name}</td>
              <td>{info.department}</td>
              <td>{info.email}</td>
              <td>{info.mobile}</td>
              <td>{info.address}</td>
              </tr>
            )
          }
        )
      }
    </tbody>
  </table>

   </div>

  );
}

export default App;
