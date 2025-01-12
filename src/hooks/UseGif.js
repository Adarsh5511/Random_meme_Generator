import axios from 'axios';
import React, { useEffect, useState } from 'react'


const UseGif = (tag) => {
    const API_KEY='powyMlHxIMLNNwny29nRYiFysqKnHdQP'
    const randomeme=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagmeme=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
   
  




const[gif, setGif] = useState('');


 const [loading, setLoading] = useState('false');

  async function fetchGif(tag){
    setLoading(true)


  const {data}= await axios.get(tag? tagmeme:randomeme);
  const images=data.data.images.downsized_large.url;
  setGif(images)
  setLoading(false);

  }

  useEffect(()=>{
      fetchGif('car');
  },[])

  return {gif,loading,fetchGif}
}

export default UseGif
