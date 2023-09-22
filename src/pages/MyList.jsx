import React from 'react'
import { useSelector } from 'react-redux'
import ListCard from '../components/cards/ListCard'

const MyList = () => {

  const list = useSelector((state) => state.myList) || []
  console.log(list)

  return (
    <div>
      <div>
      {list.map((item, index)=> (
          <ListCard key={index} item={item}></ListCard>
        ))}
      </div>
    </div>
  )
}

export default MyList
