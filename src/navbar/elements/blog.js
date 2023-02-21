import { useContext } from "react"
import Center from "../../centre-dinteret-cv-exemple.jpg"
import { context } from "../global.js"
import "./blog.css"
function Blog(){
const contextConsumer=useContext(context)
console.log(contextConsumer)


return(
    
    <div id="4" className="relative  ">
      <h1 className="text-4xl">CENTER OF INTEREST</h1>
      
      <img className="w-full h-120 opacity-30" alt="" src={Center} />
       
<div className="absolute top-12 left-0    ">
<h2 className="text-yellow-400 text-3xl ">New technologies</h2>
<p className="text-black text-xl">Video games, web design, blogging, robotics</p>
<h2 className="text-red-400 text-3xl">Travels</h2>
<p className="text-black text-xl">I like to discover new culture around the world</p>
<h2 className="text-blue-400 text-3xl">Sporting activities</h2>
<p className="text-black text-xl">I play soccer and I jog</p>
<h2 className="text-green-400 text-3xl">Music</h2>
<p className="text-black text-xl">I prefer to listen to music in english and my favorite band is passenger</p>
<h2 className="text-purple-400 text-3xl">Languages</h2>
<p className="text-black text-xl">
English : good <br/>
Frensh  : fluent <br/>
Arabic  : fluent 
</p>
 </div>

</div>
    
    
    )
    
    }
    
    
    export default Blog