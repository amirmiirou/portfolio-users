import axios from "axios"
import { useState,useContext } from "react"
import {GrClose} from "@react-icons/all-files/gr/GrClose"
import "./createNewAccount.css"
import { context } from "../global"

export default function CreateNewAccount(){

const contextConsumer=useContext(context)


const[email,setEmail]=useState()
const[password,setPass]=useState()

    return(
contextConsumer[0]===false ? null :
<div id="7" className="block w-full h-auto " >
   
   <div className="flex justify-end">

   <button className="" onClick={()=>{contextConsumer[1](false)}}><GrClose/></button>

   </div>

<div className="flex flex-col ">

<input onChange={(ele)=>{setEmail(ele.target.value)}} placeholder="enter your email" type="email" />
<input  onChange={(ele)=>{setPass(ele.target.value)}} placeholder="set your password" type="password"  />
<button className="text-black" onClick={()=>{axios.post("http://localhost:3001/users",{a:email,b:password}).then((res)=>{console.log(res?.data)})}}>create</button>




</div>

</div>


)



}