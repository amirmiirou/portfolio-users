import axios from "axios"
import {   useState } from "react"
import OwlCarousel from "react-owl-carousel"
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"


function Projects(){

const [nameProjects,setNames]=useState([])
const [checklist,setCheck]=useState("")
const [x,setX]=useState()
const [y,setY]=useState()




axios.get("http://localhost:3001/names").then((res)=>{
var resultat=Object.values(res?.data)


if (resultat.length!==nameProjects.length){
setNames(resultat)
}
})




      return(
localStorage.getItem("email")==="miroua132@gmail.com" && localStorage.getItem("value")==="true" ?    
      
      <div id="2">
    
<h1 className="text-4xl">PROJECTS</h1>
    
<div>
  

<label className="text-red-500">this section has been designed for the owner only</label><br/>
<input type={"text"} placeholder="enter new project's name" name="name" onChange={(ele)=>{setX(ele.target.value)}}/> <br/>
<input type ={"text"} placeholder="enter description" name="descriptions" onChange={(ele)=>{setY(ele.target.value)}}/> <br/>
<button onClick={()=>{axios.post("http://localhost:3001/addNewProject",{a:x,b:y}).then((res)=>{setNames(res?.data)})}} >add</button>


  

</div>

<div>
<label className="text-red-500">you've to select one of the projects presented bellow</label>
<div className="flex justify-between">
    {
    
    nameProjects.map((ele,index)=>{return (
    <div  key={index}>
      <input  onClick={(ele1)=>{setCheck(ele1.target.value)}}   type="radio"   name={"names"} value={ele.name}/>  
      <label   htmlFor={ele.name}>{ele.name}</label> 
      </div>)}
      )
    }
  </div>

<form  action="http://localhost:3001/folder" encType="multipart/form-data"   method="post" >
<label htmlFor="projectSelected">the project selected is : </label>
<input name="projectSelected" value={checklist} />
<input type="file" name="upload" multiple />
<input type="submit" name="upload" value="upload"  />
</form>

</div>
    
   

<OwlCarousel className="owl-theme" items={"1"}   >


{nameProjects.map((ele,index)=>{return(


<div key={index} >

<h1>{ele.name}</h1>
<p>{ele.description}</p>
<div className="flex">

{ele.images.map((ele1,index1)=>{
  var base64String = btoa(String.fromCharCode(...new Uint8Array(ele1.data)));
  return(

<div key={index1}>
<img alt="imag" src={`data:image/png;base64,${base64String}`} />

</div>


)})}

</div>


</div>


)})}



</OwlCarousel>




    </div> :
    <div>
<h1 className="text-4xl">PROJECTS</h1>

<OwlCarousel className="owl-theme " items={"1"}    >


{nameProjects.map((ele,index)=>{return(


<div key={index} >

<h1>{`name project : ${ele.name}`}</h1>
<p>{`project description : ${ele.description}`}</p>
<div className="flex justify-between">

{ele.images.map((ele1,index1)=>{
  var base64String = btoa(String.fromCharCode(...new Uint8Array(ele1.data)));
  
  return(

<div key={index1}>
<img className=" "  alt="imag" src={`data:image/png;base64,${base64String}`} />

</div>


)})}

</div>


</div>


)})}



</OwlCarousel>




    </div>
    
    
    )
    
    }
    
    
    export default Projects