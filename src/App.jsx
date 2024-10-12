import { useState } from 'react'
import "./Styles/root.css"
import { ArchiveList, EditProfilePage, Home, Lists, Login, PinnerList, Signup, TrashList} from './Pages/index.js';
import  {  Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext.jsx';


function App() {
  const [count, setCount] = useState(0)
  const {isAuthenticated}=useAuth();
  return (
    <Routes>
    <Route exact path="/" element={<Home></Home>} />
    <Route  path="/ArchivedList" element={<ArchiveList></ArchiveList>} />
    <Route  path="/EditProfilePage" element={<EditProfilePage></EditProfilePage>} />
    <Route  path="/Lists" element={<Lists></Lists>} />
    <Route  path="/Login" element={isAuthenticated?<Home></Home>:<Login></Login>} />
    <Route  path="/PinnedList" element={<PinnerList></PinnerList>} />
    <Route  path="/Signup" element={isAuthenticated?<Home></Home>:<Signup></Signup>} />
    <Route  path="/TrashList" element={<TrashList></TrashList>} />
  </Routes>
  )
}

export default App
