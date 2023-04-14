import { useState } from 'react'
import data from './data.js'
import Questions from './Questions.jsx'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId,setActiveId]=useState(null)


const toggleQuestion=(id)=>{
  const newActiveID=id===activeId?null:id
  setActiveId(newActiveID)
}

  return (
    <div>
      <Questions questions={questions} activeId={activeId} toggleQuestion={toggleQuestion}/>
    </div>
  )
}
export default App
