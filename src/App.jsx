import { useState } from 'react'
import "./Styles/root.css"
import { ArchiveList, EditProfilePage,PinnerList, TrashList } from './Pages';

const URL="https://taskwhiz-266479ed8de8.herokuapp.com/";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    Task Whiz
   </>
  )
}

export default App
