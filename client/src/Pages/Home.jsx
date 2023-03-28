import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from "axios";
import Accor from '../components/accor/Accor';
import { Link } from 'react-router-dom';
function Home() {
    const [tpm , settpm] = useState()
    const [trendm , settrendm] = useState()
    const [upm , setupm] = useState()
    
    const [trendt , settrendt] = useState()
  
    axios.defaults.withCredentials = true
    async function getMovies(){
      try{
                const response = await axios.get('http://localhost:5000/api/get-top-rated-movies')
                const res = await axios.get('http://localhost:5000/api/m/trend')
                const re = await axios.get('http://localhost:5000/api/m/upcoming')
                settpm(response.data)
                settrendm(res.data)
                setupm(re.data)
              }catch(e){
                console.log(e.message)
      }
    }
    async function getTv(){
      try{
               
                const res = await axios.get('http://localhost:5000/api/t/trend')
                const re = await axios.get('http://localhost:5000/api/t/upcoming')
                console.log(res.data)
               
                settrendt(res.data)
               
              }catch(e){
                console.log(e.message)
      }
    }
  
    useEffect(()=>{
            getMovies();
            getTv();
    },[])
    if(tpm){
        return (
            <div className='Home bg-dark'>
                    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={tpm[0].poster} className='cas' />
        
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                    <p></p>
                    <div  className='watch'>
                    <h1><span className='tet'>{tpm[0].title}</span></h1>
<Link to={'/title/'+tpm[0].imdb_id}>
                   <button class="btn-white" href="#">
  Watch NOW 
</button>
                   </Link>
</div>
                    
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <img src={tpm[1].poster} className='cas'/>
        
                <div class="container">
                <div class="carousel-caption text-start">
                
<div  className='watch'>
<h1><span className='tet'>{tpm[1].title}</span></h1>
<Link to={'/title/'+tpm[1].imdb_id}>
                   <button class="btn-white" href="#">
  Watch NOW 
</button>
                   </Link>
</div>
                    
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img src={tpm[2].poster} className='cas'/>
        
                <div class="container">
                <div class="carousel-caption text-start">
                    
                   <div className='watch'>
                   <h1 className='tet'>{tpm[2].title}</h1>
                   <Link to={'/title/'+tpm[2].imdb_id}>
                   <button class="btn-white" href="#">
  Watch NOW 
</button>
                   </Link>
                   </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className='htit'>
            TOP RATED MOVIE
          </div>
          <Accor data={tpm}/>
          
          <div className='htit'>
            TREND MOVIES
          </div>
          <Accor data={upm} />
          <div className='htit'>
            TREND TV SHOWS
          </div>
          <Accor data={trendt}/>
         
            </div>
            
          )
    }else{
        <div>loading</div>
    }
 
}

export default Home