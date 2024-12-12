import React, { useState } from 'react'
import { people } from '../data'
import THead from './THead'
import TBody from './TBody'

const Table = () => {
    const [data,setData] = useState(people)
   
  return (
    <table border={1} width="50%">
       <THead columns={Object.keys(data[0])}/>
       <TBody data={data} setData={setData}/>
    </table>
  )
}

export default Table
