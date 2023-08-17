import { useState } from "react"

const FormCheckBoxExamples =(props)=>{
   
    const[isCheckedA, setIsCheckedA] = useState(false)
  const[isCheckedB, setIsCheckedB] = useState(false)
  const[isCheckedC, setIsCheckedC] = useState(false)
   
    return(
        <form>
        <input type='checkbox' checked ={isCheckedA} onChange={ (synthEvent)=>{ setIsCheckedA (!isCheckedA ) } }/>
        <input type='checkbox' checked ={isCheckedB} onChange={ (synthEvent)=>{ setIsCheckedB (!isCheckedB ) } }/>
        <input type='checkbox' checked ={isCheckedC} onChange={ (synthEvent)=>{ setIsCheckedC (!isCheckedC ) } }/>
       
      </form> 
    )
}
export default FormCheckBoxExamples