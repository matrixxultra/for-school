import React, { useState } from 'react'

const TBody = ({data,setData}) => {
    
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [age, setAge] = useState("");
    const [editRow, setEditRow] = useState(null);

    // delete user

   const deletePerson = (id)=>{
        const row = document.getElementById(id)
        confirm("do you want to delete this person ?") && row.remove() 
       
   }
   

   const handleEdit = (id) => {
    const person = data.find(i=>i.id == id)
    setFirstName(person.firstName)
    setLastName(person.lastName)
    setAge(person.age)
    setEditRow(id);
     
   };
 
   
  
   const handleSave = (id,updated) => { 
     console.log(updated);
       
       setData(
           data.map((person) =>
           person.id === id ? { ...person, ...updated } : person
           )
       );
     setEditRow(null);
   };
 
   
   const handleCancel = () => {
     setEditRow(null);
   };
   
 
   

  return (
    <tbody>
    {
        data.map(item=>
        <tr key={item.id} id={item.id}>
            
            <td> {item.id} </td>
            <td> {item.id == editRow ?  
             <input type="text" defaultValue={firstName} onChange={e=>setFirstName(e.target.value)} /> : item.firstName } 
             </td>
            <td> {item.id == editRow ?  <input type="text" defaultValue={lastName} onChange={e=>setLastName(e.target.value)} /> : item.lastName } </td>
            <td> {item.id == editRow ?  <input type="text" defaultValue={age} onChange={e=>setAge(e.target.value)} /> : item.age } </td>
            
            <td>
                {item.id == editRow ? <>
                    <button onClick={()=>handleSave(item.id,{firstName:firstName , lastName:lastName ,age : age})}>Save</button> 
                    <button onClick={()=>handleCancel(item.id)}>Cancel</button> 
                    </>
                 :
                     <>
                    <button onClick={()=>deletePerson(item.id)}>Delete</button> 
                    <button onClick={()=>handleEdit(item.id)}>Edit</button>
                </>}
                
            </td>
        </tr>
        )
    }
    </tbody>
  )
}

export default TBody
