import axios from "axios"
import { useEffect, useState } from "react"
import OwlCarousel from "react-owl-carousel"
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"


function Projects(parametre){

const  [content,setContent]=useState([])
const  [tablee,setTable]=useState([])
const [nameProjects,setNames]=useState([])
const [checklist,setCheck]=useState("")

const [x,setX]=useState()
const [y,setY]=useState()

useEffect(()=>{console.log(checklist)},[checklist])



axios.get("http://localhost:3001/names").then((res)=>{
  
var x=Object.values(res?.data)
var y=nameProjects.length,z=x.length
  


if( z===y  ){
  let test1=true
  for(let i=0;i<z && test1===true ;i++){
  let test2=false
  let j=0
  while(j<y && test2===false){
  if(x[i].name !== nameProjects[j].name ){
  j++
  }else{
  test2=true
  }
  }
  if(test2===false  ){
    test1=false
  setNames(x)
  }
  }
  }else{
  setNames(x)
  }




})



axios.get("http://localhost:3001/images").then((res)=>{
  
 
 var x=Object.values(res?.data)
  var y=content.length,z=x.length
  if( z===y  ){
  let test1=true
  for(let i=0;i<z && test1===true ;i++){
  let test2=false
  let j=0
  while(j<y && test2===false){
  if(x[i].identifiant !== content[j].identifiant ){
  j++
  }else{
  let test3=true
  for(let k=0;k<content[j].image.data.length && test3===true;k++){
  if(x[i].image.data[k] !== content[j].image.data[k]){
  test3=false}
  }
  if(test3===true){
    test2=true
  }else{
    j++}
  }
  }
  if(test2===false || j===content.length ){
    test1=false
  setContent(x)
  }
  }
  }else{
  setContent(x)
  }
  }) 

useEffect(()=>{

var  table=[]
  
  for(let i=0;i<content.length;i++){
  let test=false
  for(let k=0;k<table.length && test===false;k++){
  if(content[i].identifiant===table[k].identifiant){
  test=true
  }}
  if(test===false){
  var j=i+1
  var table2=[content[i].image.data]
  for(j;j<content.length;j++){
  
  if(content[i].identifiant===content[j].identifiant){
  table2.push(content[j].image.data)
  }
  
  }

table.push({identifiant:content[i].identifiant,name:content[i].name,description:content[i].description,image:table2})


}



  
  
  }

  
  setTable(table)

},[content])

useEffect(()=>{console.log(tablee)},[tablee])


      return(
parametre.attribute.a==="miroua132@gmail.com" && parametre.attribute.b===true ?    
      
      <div id="2">
    
<h1 className="text-4xl">PROJECTS</h1>
    
<div>
<label className="text-red-500">this section has been designed for the owner only</label><br/>
<input type={"text"} placeholder="enter new project's name" name="name" onChange={(ele)=>{setX(ele.target.value)}}/> <br/>
<input type ={"text"} placeholder="enter description" name="description" onChange={(ele)=>{setY(ele.target.value)}}/> <br/>
<button onClick={()=>{axios.post("http://localhost:3001/addNewProject",{a:x,b:y})}}>add</button>
</div>

<div>
<label className="text-red-500">you've to select one of the projects presented bellow</label>
<div className="flex justify-between">
    {
    
    nameProjects.map((ele,index)=>{return (
    <div  key={index}>
      <input  onClick={(ele1)=>{
        setCheck(ele1.target.value)
        
        document.getElementById("empty").value=ele1.target.id
          }}   type="radio"  id={ele.identifiant} name={"ererer"} value={ele.name}/>  
      <label   htmlFor={ele.name}>{ele.name}</label> 
      </div>)}
      )
    }
  </div>

<form  action="http://localhost:3001/folder" encType="multipart/form-data"   method="post" >
<input id="empty" name="test"  className="w-5 hidden"/>
<input type="file" name="upload" multiple />
<input type="submit" value="upload"  />
</form>

</div>
    
   

<OwlCarousel className="owl-theme" items={"1"}   >


{tablee.map((ele)=>{return(


<div key={ele.identifiant} >

<h1>{ele.name}</h1>
<p>{ele.description}</p>
<div className="flex">

{ele.image.map((ele1,index)=>{
  var base64String = btoa(String.fromCharCode(...new Uint8Array(ele1)));
  return(

<div key={index}>
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


{tablee.map((ele)=>{return(


<div key={ele.identifiant} >

<h1>{`name project : ${ele.name}`}</h1>
<p>{`project description : ${ele.description}`}</p>
<div className="flex justify-between">

{ele.image.map((ele1,index)=>{
  var base64String = btoa(String.fromCharCode(...new Uint8Array(ele1)));
  
  return(

<div key={index}>
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