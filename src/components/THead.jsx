import React from 'react'

const THead = ({columns}) => {
   
  return (
    <thead>
        <tr>
      {
        columns.map((item,key)=> <th key={key}>{item}</th>)
      }
      <th>Actions</th>
      </tr>
    </thead>
  )
}

export default THead
