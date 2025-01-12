import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';
const Random = () => {

    // const[gif, setGif] = useState('');
    //   const API_KEY='powyMlHxIMLNNwny29nRYiFysqKnHdQP'

    //  const [loading, setLoading] = useState(false);

    //   async function fetchGif(){
    //     setLoading(true)
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    //   const {data}= await axios.get(url);
    //   const images=data.data.images.downsized_large.url;
    //   setGif(images)
    //   setLoading(false);

    //   }

    //   useEffect(()=>{
    //       fetchGif();
    //   },[]);
 
    const {gif,loading,fetchGif}=UseGif();
    function clickhandler(){
        
        fetchGif();

    }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border  border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>
{
   loading?(<Spinner/>):( <img src={gif} width="450" alt='random gif' />)

}
      <button onClick={clickhandler} className='w-10/12 bg-white opacity-90 hover:opacity-100  font-bold py-2 rounded-lg text-black mb-[20px] text-lg'>
        Generate 
      </button>
    </div>
  )
}

export default Random
