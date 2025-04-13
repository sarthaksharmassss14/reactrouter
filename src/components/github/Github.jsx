import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]= useState(0)
    useEffect(()=>{
        fetch('https://api.github.com/users/sarthaksharmassss14')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className='flex flex-col items-center text-center m-4 p-4 text-3xl bg-orange-700 text-gray-800'>Github repos: {data.public_repos}
    <img src={data.avatar_url} width={300} className='rounded-full p-3' />
    </div>
  )
}

export default Github