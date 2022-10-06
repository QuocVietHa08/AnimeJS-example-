import React, { useState } from 'react'
import Box from './Box'
import Counter from './Counter'

const AnimeOption = () => {
  const [animeOption, setAnimeOption] = useState()

  const showAnimeOption = (option) => {
    switch(option)  {
      case "1":
        return <Box />
      case "2":
        return <div>hello</div>
      case "3":
        return <Counter />

      default: 
        return <div>Default option</div>
    }
  }

  console.log("1:", animeOption, typeof animeOption)
  return (
    <div>
      <span>Select anime style</span>
      <select onChange={(e) => setAnimeOption(e.target.value) }>
        <option value={null}>Nothing</option>
        <option value={1}>Box</option>
        <option value={2}>Word</option>
        <option value={3}>Counter</option>
      </select>
      {showAnimeOption(animeOption)}
    </div>
  )
}

export default AnimeOption