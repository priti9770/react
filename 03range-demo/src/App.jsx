import { useRef } from 'react'
import { useEffect } from 'react'
import { useState,useCallback } from 'react'




function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] =useState(false)
  const [charAllowed,setCharAllowed] =useState(false)
  const [password,setPassword] =useState("")

  const passwordRef = useRef(null)



  // Genrate random password text 

  const passwordGenrator  = useCallback(()=>{
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%^&*-_+=[]{}~`"
    
    for(let i =1;i<=length;i++){
      let  char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }
    ,[length,numberAllowed,charAllowed,setPassword])

  
    // function copyPasswordText(){

 // writeText() method is used to write some copy text on clipbord 
    //   window.navigator.clipboard.writeText(password)
    // }
  
    // coppyPasswordText 
    const copyPasswordText =useCallback(()=>{

      passwordRef.current?.select();     // select text 
      passwordRef.current?.setSelectionRange(0,20)      // select only 20 charactor
      window.navigator.clipboard.writeText(password)
    },[password])
    

useEffect(()=>{
  passwordGenrator()

},[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
  <h1 className='text-white text-center my-3'>Password Genrator</h1>
    <div className="flex  shadow rounded-lg overflow-hidden mb-4">
    <input type="text" 
    value={password}
    className='outline-none w-full py-1 px-3'
    readOnly
    ref={passwordRef}
    />

<button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
onClick={copyPasswordText}
>copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
    <input type="range"  
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={ (e)=>{setLength(e.target.value)}}
     
     
    />
    <label >Length : {length}</label>

    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked={numberAllowed}
    id="numberInput"
    onChange={ ()=>{
      setNumberAllowed((prev)=>!prev)
    }}
     />
     <label htmlFor="numberInput">Numbers</label>

    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox"
    defaultChecked={charAllowed}
    id="charAllowed"
    onChange={ ()=>{
      setNumberAllowed((prev)=>!prev)
    }}
     />
     <label htmlFor="charAllowed">charactor</label>

    </div>
    </div>
  </div>
      
    </>
  )
}

export default App
