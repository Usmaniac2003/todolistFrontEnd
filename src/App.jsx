import { useState } from 'react'
import "./Styles/root.css"
import { EditProfilePage,PinnerList } from './Pages';

const URL="https://taskwhiz-266479ed8de8.herokuapp.com/";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Task Whiz
    <PinnerList/>
   </>
  )
}

export default App
