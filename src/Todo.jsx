import React, { useEffect, useState } from 'react'


const getlists = () => {



  const data = localStorage.getItem('lists');
  
  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }

  
}


const Todo = () => {

const [items , setItems] = useState(getlists());
const [input , setInput] = useState("");


const addthetodo = () => {

    console.log("working")

if(input === ""){
    alert("please enter something");
}else{
    const updatedItems = [...items, input];

      setItems(updatedItems);

   
      setInput("");
}

}


const removeItems = () => {

  localStorage.removeItem('lists');
  setItems([]);
}


useEffect(() => {

localStorage.setItem("lists" , JSON.stringify(items));


}, [items]); 

  return (
    
  <div className='flex justify-center items-center mt-[90px] mr-auto ml-auto '>
    
     <div className='bg-gray-400 h-72  w-96 rounded-lg flex items-center  flex-col'> 
        <div className='mt-4 w-[90%]  border-none '>
           <div className=' flex items-center flex-row'>
           <input type="text" onChange={(e) => setInput(e.target.value)} value={input}
            placeholder='Your Daily work' className='px-1 py-3 font-bold rounded-lg w-full inputcolor placeholder:font-normal placeholder:text-black-400 ' />
            <i className="fa-solid fa-plus fa-2xl ml-2" 
            onClick={() => addthetodo()}></i>
            <i className="fa-solid fa-trash ml-2 fa-2xl"
            onClick={() => removeItems()}></i>
           </div>
        </div>
        <div  className=' mt-2  h-full w-full flex flex-col  overflow-y-scroll scrollbar-hide '>
       
           {
            items.map((item , index) => {
                return(<ul key={index}>
                    <li  className=' m-1 p-3 rounded-md text-decoration list-none bgcolor'>{item}</li> 
                    </ul>)
            })
           }
        </div>

    </div>
  </div>
  )
}

export default Todo