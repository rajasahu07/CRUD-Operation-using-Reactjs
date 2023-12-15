import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Createuser = () => {
  let [name, setName] = useState("")
  let [rollno, setRollno] = useState("")
  let [standard, setStandard] = useState("")

  let navigator = useNavigate()

  let nameData=(e)=>{
    setName(e.target.value)
  }
  let rollnoData=(e)=>{
    setRollno(e.target.value)
  }
  let standardData=(e)=>{
    setStandard(e.target.value)
  }

  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,rollno,standard}
    axios.post("http://localhost:3000/users",payload)
    .then(()=>{
      console.log("DATA HAS BEEN ADDED");
    })
    .catch(()=>{
      console.log("SOMETHING IS FISHY");
    })
    navigator("/user")
  }
  return (
    <div id={style.myForm}>
      <form action=""> 
      <tr>
        <th colSpan="2"><h4>User Details</h4></th>
        </tr> 
        <tr>
            <td><label htmlFor="">Name</label></td>
            <td>:<input type="text" value={name} onChange={nameData}/></td>
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
            <th colSpan="2" onClick={formHandle}><button>Submit</button></th>
        </tr>
    </form>  
    </div>
  )
}

export default Createuser
