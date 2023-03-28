import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './FilmxShow.css'
import axios from "axios"; 
function FilmxShow() {
    const {id} = useParams()
    const [data, setData] = useState()
    const [isTv , setIsTv]= useState(false)
    const [lin , setLin] = useState('')
    const [mtrend , settrendm] = useState({})
    const [cred , setCred] = useState({'s':1,'ep':1})
    const [eps , setEps] = useState()
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/series/'+id,
        headers: {
          'X-RapidAPI-Key': '0290f6b5b2mshdd46642a4c32939p14acfcjsn8f3d7ae6a924',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      async function geteps(){
        try{
                const resposne = await axios.request(options)
                setEps(resposne.data.results)
              
        }catch(e){
            console.log(e.message)
        }
      }
    async function getMovies(){
        try{
                
                  const res = await axios.get('http://localhost:5000/api/m/trend')
                  
                  settrendm(res.data)
                  
                 
                }catch(e){
                  console.log(e.message)
        }
      }
   async function getData(){
    try{
        const response = await axios.get('http://localhost:5000/api/title/'+id)
        setData(response.data)
        if(response.data.media_type==='tv'){
            setIsTv(true)
            setLin(`https://www.2embed.to/embed/imdb/tv?id=${id}&s=${cred.s} &e=${cred.ep}`)
        }else{
            setLin(`https://www.2embed.to/embed/imdb/movie?id=${id}`)
        }
        console.log(response.data)
    }catch(e){
        console.log(e.message)
    }
   }
    
      useEffect(()=>{
        setLin(`https://www.2embed.to/embed/imdb/tv?id=${id}&s=${cred.s} &e=${cred.ep}`)
      },[cred])
    
      
     useEffect(()=>{
            getData()
            getMovies();
            geteps();
     },[])
     if(data){
        return (
            <div className='filmxshow  '>
                <div className='title '>
                 <Link to='/'> <a>Home</a>  </Link>  
                <span>/</span>
                    {data.media_type}
                <span>/</span>
                {data.title}
                </div>
                <div className='server'>
                    <div className='bgimg'>
                        <img className='img' src={'https://image.tmdb.org/t/p/w500'+data.poster_path} />
                    </div>
                    <iframe  allowFullScreen  src={lin} >

</iframe>
                </div>
                <div className='epssec'>
                {eps &&eps.map((item)=>{
                    if(isNaN(item.seasonNumber)==true){
                        return 
                    }else{
                        return <button class="btn btn-light" onClick={(e)=>{
                            setCred({'s':e.currentTarget.innerText.charAt(1) , 'ep':e.currentTarget.innerText.slice(4)})
                                
                           }}  id={item.seasonNumber}  >{"s"+item.seasonNumber+"ep"+item.episodeNumber}</button>
                    }
      })}
                </div>
                
                <div className='details'>
                        <div className='poster'>
                                <img className='imgposter' src={'https://image.tmdb.org/t/p/w500'+data.poster_path}/>
                            </div>
                            <div className='det1'>
                                <div className='tit'>
                                   {data.title}
                                </div>
                                <div className='rg'>
                                    <div className='rating'>
                                    <div className='star'>
                                        rating :  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                                    </div>
                                    <div className='score'>
                                    {data.vote_average.toFixed(1)}
                                    </div>
                                    
                                    </div>
                                    <div className='date'>
                                          {data.release_date}
                                    </div>
                                </div>
                                <div className='plot'>
                                    <p style={{fontSize:'25px',fontFamily:'Shantell Sans, cursive'}}>overview :</p>
                                    {data.overview}
                                   
                                </div>
                            </div>
                    
                        
                        
                   
                  
                </div>
                </div>
          )
     }else{
        <div className='filmxshow'>FilmxShow</div>
     }
}

export default FilmxShow