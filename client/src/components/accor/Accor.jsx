import React from 'react'
import { Link } from 'react-router-dom'
import './accor.css'
function Accor(props) {
  
    return (
    <div class="accordion">
    <ul>
      {props?.data.map((e)=>{
        if(e.imdb_id != null){
          return <Link to={'/title/'+e.imdb_id}>
          <li>
           <div class="image_title">
             {e.title}
           </div>
           <img src={e.poster} className='posteracc'  border="0"/>
         </li>
          </Link> 
        } else{
          return 
        }
      })}
    </ul>
  </div>
  )
}

export default Accor