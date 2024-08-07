import { useState } from 'react'
import "./Styles/root.css"
import { ArchiveList, EditProfilePage,PinnerList, TrashList } from './Pages';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Lists from './Pages/Lists';

const URL="https://taskwhiz-266479ed8de8.herokuapp.com/";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Lists></Lists>
   </>
  )
}

export default App
