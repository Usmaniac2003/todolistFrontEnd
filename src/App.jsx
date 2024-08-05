import { useState } from 'react'
import "./Styles/root.css"
import { ArchiveList, EditProfilePage,PinnerList, TrashList } from './Pages';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

const URL="https://taskwhiz-266479ed8de8.herokuapp.com/";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Home></Home>
   </>
  )
}

export default App
