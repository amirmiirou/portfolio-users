import {BrowserRouter} from "react-router-dom"
import CreateNewAccount from "./elements/createNewAccount"
import {HashLink as Link} from "react-router-hash-link"
import Photo from "./elements/firstPicture.jpg"
import About from "./elements/about"
import HireMe from "./elements/hireMe"
import Projects from "./elements/projects"
import Contact from "./elements/contact"
import Blog from "./elements/blog"
import {GrCode} from "@react-icons/all-files/gr/GrCode"
import './global.css'
import {RiLightbulbLine} from "@react-icons/all-files/ri/RiLightbulbLine"
import {RiLightbulbFill} from "@react-icons/all-files/ri/RiLightbulbFill"
import axios from "axios"
import React, { useEffect, useState } from "react"
export  const context=React.createContext()




function Global(){
    const [theme,setTheme]=useState("light")
const [e,setE]=useState(false)  
    const [password,setPass]=useState()
    const [z,setZ]=useState(false)
const [email,setEmail]=useState()
    useEffect(()=>{
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark") 
    },[theme])


useEffect(()=>{console.log(e)},[e])

return (
<context.Provider value={[z,setZ]}>
<BrowserRouter>
<div className="" >
{
 // navbar start   
}
<div className='w-full flex justify-between flex-wrap bg-blue-50 rounded-lg '>

<div className="flex">
<GrCode />
<h1 className='underline '>Full Stack Developer</h1>
</div>

<div className=' flex  flex-grow justify-between '>
<div><Link to='#0'>ABOUT</Link></div>
<div><Link to='#1'>HIRE Me</Link></div>
<div><Link to='#2'>PROJECTS</Link></div>
<div><Link to='#3'>CONTACT</Link></div>
<div><Link to='#4'>CENTER OF INTEREST</Link></div>
<div>{localStorage.getItem("value")==="false" ? <Link to="#5">LOGIN</Link> : 
    

<select id="ze" onChange={()=>{


setE(false)  
localStorage.setItem("email","")
localStorage.setItem("value","false")
}} >
         <option value={localStorage.getItem("email")} >{localStorage.getItem("email")}</option> 
         <option value={"logout"} >logout</option>
</select>  

    
    } </div>
</div>


<button onClick={()=>{setTheme(theme === "dark" ? "light" : "dark") }}>{ theme==="light" ?  <RiLightbulbFill/> : <RiLightbulbLine/>}</button>

</div>
{
// navbar end
}
{
//image start    
}

<div className="">


<div className='relative'>
<div>
<img  className='w-full h-96' src={Photo} alt="i am a developer" />
</div>
<div className=' absolute top-1/2 w-full'>
<p className='font-black text-3xl  text-center '>
Hi I am Amir, full stack developer.<br />
Do you need anything.<br />
I am at your service.
</p>
</div>
</div>
{
//image end    
}

{
//body start    
}
<div  className=''>
{<About/>}
{<HireMe/>}

{<Projects/>}
{<Blog/>}
{<Contact/>}


<div id="5">

{
    
localStorage.getItem("value")==="false" ? <div>


<h1 className="text-4xl">LOGIN</h1>
<input  type="email" name="email"  placeholder="enter your email" onChange={(ele)=>{setEmail(ele.target.value)
}} />
<input type="password" name="pass" placeholder="enter your pass" onChange={(ele)=>{setPass(ele.target.value)
}} />

<button onClick={()=>{axios.get("https://back-oxze.onrender.com/login").then((res)=>{

let tableau=res?.data


let test=false
for(let i=0;i<tableau.length && test===false;i++){
    
if(tableau[i].email===email && tableau[i].password===password){
test=true
}

}
if(test===true){
setE(true)
localStorage.setItem("email",email)
localStorage.setItem("value","true")
}else{

alert("verify your enter")

}
})}} >login</button>
<div>

<Link className="" onMouseEnter={(ele)=>{ ele.target.className="text-blue-500"}}  onMouseLeave={(ele)=>{ele.target.className=""}}  >password lost</Link>
<div className="flex"> 
<p>if you didn't subscribe yet push on :  </p>
<Link className="" onClick={()=>{setZ(true)}} onMouseEnter={(ele)=>{ ele.target.className="text-blue-500"}}  onMouseLeave={(ele)=>{ele.target.className=""}}  to="#7"> create new account</Link>

</div>

</div>

{<CreateNewAccount attribut={z} />}



</div> : null}


</div>

</div>
{
//body end    
}




</div>


</div>
</BrowserRouter>
</context.Provider>


)

}

export default Global