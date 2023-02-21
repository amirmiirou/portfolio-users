import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook"
import {ImInstagram} from "@react-icons/all-files/im/ImInstagram"
import {GrMail} from "@react-icons/all-files/gr/GrMail"
import {TiPhone} from "@react-icons/all-files/ti/TiPhone"
import "./contact.css"
import axios from "axios"
import { useState } from "react"

function Contact(){

const [email,setEmail]=useState()
const [password,setPass]=useState()
const [subject,setSubject]=useState()
const [text,setText]=useState()


return(

<div id="3" className="px-1">

<h1 className="text-4xl">CONTACT</h1>

<div className="flex ">

<div className=" flex flex-wrap border rounded-xl " >
<div>
<label htmlFor="email">email </label>    
<input type="email" name="email" placeholder="enter your email" onChange={(ele)=>{setEmail(ele.target.value)}} />
</div>
<div>
<label htmlFor="password">password </label>   
<input type="password" name="password" placeholder="enter your pass"  onChange={(ele)=>{setPass(ele.target.value)}} />
</div>
<div>
<label htmlFor="subject" >subject </label>   
<input type="text" name="subject" placeholder="enter subject"    onChange={(ele)=>{setSubject(ele.target.value)}}  />
</div>
<div>
<label htmlFor="text">message </label>
<input type="text" name="text" placeholder="enter your message"  onChange={(ele)=>{setText(ele.target.value)}}  />
</div>
<div>
<button className="" onClick={()=>{axios.post("http://localhost:3001/envoyerMessage",{a:email,b:password,c:subject,d:text})}}>send email</button>
</div>
</div>

<div className="">
<h2>Contact us on : </h2>
<a href="https://www.facebook.com/amir.mirou.165470"  className="flex" ><FaFacebook /> <h3 >facebook</h3></a>     
<a href="https://www.instagram.com/mirou9993/" className="flex"> <ImInstagram /> <h3>instagram</h3></a>   
<div className="flex"><GrMail /> <h3>miroua132@gmail.com</h3></div>
<div className="flex"><TiPhone/> <h3>+213675206693</h3></div>
</div>
  
</div>
  
</div>


)

}


export default Contact