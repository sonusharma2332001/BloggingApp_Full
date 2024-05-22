import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DashBoard from "./Pages/DashBoard";
import Projects from "./Pages/Projects";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header";
import Footer  from "./Components/footer";
import PrivateRaute from "./Components/PrivateRaute";
import Error from './Pages/ErrorPage'
import AdminRoute from "./Components/AdminRoute";
import WriteBlogPage from "./Pages/WriteBlogPage";
import UpdateBlog from "./Pages/UpdateBlog";
import Postpage from "./Pages/Postpage";
import Search from "./Pages/Search";


function App() {

  return (
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search:category' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<PrivateRaute/>}>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Route>
      <Route element={<AdminRoute/>}>
        <Route path="/create-post" element={<WriteBlogPage/>}/>
        <Route path="/update-post/:postId" element={<UpdateBlog/>}/>
      </Route>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='post/:slug' element={<Postpage/>}/>
      <Route path='/search' element={<Search />} />
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App
