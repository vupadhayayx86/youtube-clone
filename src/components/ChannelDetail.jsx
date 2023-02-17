import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {Videos,ChannelCard} from "./"
import { fetchFromAPI } from '../utils/fetchFromAPI'
import zIndex from '@mui/material/styles/zIndex'
const ChannelDetail = () => {

  const [ChannelDetail,setChannelDetail]=useState(null)
  const [videos, setVideos] = useState([])

  const {id}=useParams();

  console.log(ChannelDetail,videos)

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data)=>setVideos(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
      <Box style={{
        background: 'linear-gradient(90deg, rgba(219,65,198,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex:10,
        height:'300px'
      }}>
        <ChannelCard channelDetail={ChannelDetail} />
      </Box>
    </Box>
  )
}

export default ChannelDetail