import {useState} from "react"
import "./hireMe.css"
import axios from "axios"
function HireMe(){
const [email,setEmail] =useState("")
const [pass,setPass] =useState("")
const [entreprise,setEntreprise] =useState("")
const [desc,setDesc] =useState("")

return(
    
    <div id="1" className="">
    <h1 className=' text-4xl'>HIRE ME </h1>
<div className="flex flex-col items-center border border-l-violet-900 rounded-full">
<div>
<label htmlFor="email">email </label>
<input id="email" name="email" type={"email"} placeholder="enter your email" onChange={(ele)=>{setEmail(ele.target.value)}} />
</div>
<div>
<label htmlFor="pass">password </label> 
<input type={"password"} id="pass" name="pass" placeholder="enter your password" onChange={(ele)=>{setPass(ele.target.value)}} />
</div>
<div>
<label htmlFor="entreprise">entreprise name </label>
<input type={"text"} id="entreprise" name="entreprise" placeholder="enter entreprise's name" onChange={(ele)=>{setEntreprise(ele.target.value)}} />
</div>
<div>
<label htmlFor="describtion">offer describtion </label>
<input type={"text"} id="describtion" name="describtion" placeholder="what kind of job"  onChange={(ele)=>{setDesc(ele.target.value)}} />
</div>
<div>
<button onClick={()=>{axios.post("http://localhost:3001/register",{a:email,b:pass,c:entreprise,d:desc})}} >send offer</button>
 
</div>

</div>

</div>
    
    
    )
    
    }
    
    
    export default HireMe