import {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import DashProfile from '../Components/DashProfile';
import DashSidebar from '../Components/DashSidebar';
import DashPosts from '../Components/DashPosts';
import DashUsers from '../Components/DashUsers';
import { useSelector } from 'react-redux';
import Home from './Home';

const DashBoard = () => {
  const {currentUser} = useSelector(state=>state.User)
  const location = useLocation();
  const [tab,setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
      <DashSidebar/>
    </div>
      {tab==='profile' && <DashProfile/>}
      {tab==='users' && <DashUsers/>}
      {tab==='posts' &&<DashPosts/>}
      {tab==='allposts' && <Home/>}
      
    </div>
    
  )
}


export default DashBoard
