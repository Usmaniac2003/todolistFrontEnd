import { useState } from 'react'
import "./Styles/root.css"
import { ArchiveList, EditProfilePage,PinnerList, TrashList,Login,Home,Lists, Signup } from './Pages/index.js';
import Header from './Components/Header';
import Footer from './Components/Footer';

const URL="https://taskwhiz-266479ed8de8.herokuapp.com/";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{overflowX:""}}>
    <Lists></Lists>
   </div>
  )
}

export default App
