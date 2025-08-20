
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './users/pages/Home'
import { useEffect, useState } from 'react'
import Preloader from './components/Preloader'
import Auth from './Pages/Auth'
import AllBooks from './users/pages/AllBooks'
import Viewbook from './users/pages/Viewbook'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile'
import AdminHome from './admin/Pages/AdminHome'
import AdminBooks from './admin/Pages/AdminBooks'
import AdminCareers from './admin/Pages/AdminCareers'
import AdminSettings from './admin/Pages/AdminSettings'
import PageNotFound from './pages/PageNotFound'
import Paymentsuccess from './users/pages/Paymentsuccess'
import Paymenterror from './users/pages/Paymenterror'

function App() {
    
  const [isLoading,setIsLoading]=useState(false)

useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(true)
  },3000)
},[])
  return (
    <>

    <Routes>
      <Route path='/' element={isLoading?<Home/>:<Preloader/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/allBooks' element={<AllBooks/>}/>
      <Route path='/viewBook/:id' element={<Viewbook/>}/>
      <Route path='/Careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      {/* <Route path='/Home' element={<Home/>}/> */}


       <Route path='/admin-home' element={<AdminHome/>}/>
       <Route path='/admin-books' element={<AdminBooks/>}/>
       <Route path='/admin-careers' element={<AdminCareers/>}/>
       <Route path='/admin-settings' element={<AdminSettings/>}/>

      <Route path='/payment-success' element={<Paymentsuccess/>}/>
      <Route path='/payment-error' element={<Paymenterror/>}/>

       <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  
    </>
  )
}

export default App
