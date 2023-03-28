import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './search.css'
function Search() {
   const [search , setSearch]=useSearchParams()
   const [results , setRes]=useState()
async function getsea(){
  try{
    const res = await axios.get('http://localhost:5000/api/search',{ 
      params: { q: search.get('q') }
    })
   setRes(res.data)
   
  }catch(e){
      console.log(e.message)
  }
}
console.log(results)
   useEffect(()=>{
  getsea()
},[search.get('q')])
  return (
    <div className='searchh bg-dark'>
        <h1 className='searchtit'>Search for "{search.get('q')}"</h1>
        <div className='listse'>


        </div>
    </div>
  )
}

export default Search