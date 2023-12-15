import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"


const Edituser = () => {
  let [name, setName] = useState("")
  let [rollno, setRollno] = useState("")
  let [standard, setStandard] = useState("")

  let {index} = useParams()
  let navigator= useNavigate()
  // console.log(index);

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${index}`)
    .then((resp)=>{
      console.log(resp.data)
      setName(resp.data.name)
      setRollno(resp.data.rollno)
      setStandard(resp.data.standard)
    })

  },[])

  let nameData=(e)=>{
    e.preventDefault()
    setName(e.target.value)
  }
  let rollnoData=(e)=>{
    e.preventDefault()
    setRollno(e.target.value)
  }
  let standardData=(e)=>{
    e.preventDefault()
    setStandard(e.target.value)
  }
  
  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,rollno,standard}
    axios.put(`http://localhost:3000/users/${index}`,payload)
    .then(()=>{
      console.log("DATA HAS BEEN SUCCESSFULLY UPDATED");

    })
    navigator("/user")
  }

return(
<div id={style.myForm}>
<form action=""> 
<tr>
  <th colSpan="2"><h4>Update User Details</h4></th>
  </tr> 
  <tr>
      <td><label htmlFor="">Name</label></td>
      <td>:<input type="text" value={name} onChange={nameData} /></td>
  </tr>
  <tr>
      <td><label htmlFor="">Rollno</label></td>
      <td>:<input type="text" value={rollno} onChange={rollnoData} /></td>
  </tr>
  <tr>
      <td><label htmlFor="">Standard</label></td>
      <td>:<input type="text" value={standard} onChange={standardData} /></td>
  </tr>
  <tr>
      <th colSpan="2" ><button onClick={formHandle}>Update</button></th>
  </tr>
</form>  
</div>
)}

export default Edituser
