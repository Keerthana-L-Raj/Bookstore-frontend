import React, { useState, useEffect } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Card, Avatar } from "flowbite-react";
import { adminApprovedBookAPI, getAdminAllBookAPI, getAdminAllUsersAPI } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';


function AdminBooks() {
  const [bookStatus, setBookStatus] = useState(true) // show books by default
  const [userStatus, setUserStatus] = useState(false)
  const [userBooks, setUserBooks] = useState([])
  const [token, setToken] = useState("")
  const[approveStatus,SetApproveStatus] = useState(false)
  const[allUsers,setAllUsers]=useState([])
  const getAllBooksAdmin = async (token) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    try {
      const result = await getAdminAllBookAPI(reqHeader)
      console.log(result);
      setUserBooks(result.data)
    } catch (err) {
      console.log(err);
    }
  }
console.log(userBooks);

const handleApprove=async(data)=>{
   const reqHeader = {
      Authorization: `Bearer ${token}`
    }
      try {
      const result = await adminApprovedBookAPI(data,reqHeader)
      console.log(result);
      //setUserBooks(result.data)
      SetApproveStatus(true)
      getAllBooksAdmin(token)
    } catch (err) {
      console.log(err);
    }
}

  const getAllUsers = async (token) => {
    const reqHeader = {
      Authorization: `Bearer ${token}`
    }
    try {
      const result = await getAdminAllUsersAPI(reqHeader)
      console.log(result);
      setAllUsers(result.data)
      setBookStatus(false);setUserStatus(true)
    } catch (err) {
      console.log(err);
    }
  }

  // get token and fetch books
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

useEffect(()=>{
  if(token){
    getAllBooksAdmin(token)
  
  }
},[token])
  return (
    <div>
      <AdminHeader />
      <div className="row flex h-150 mt-20">
        <div className="col flex flex-col items-center">
          <AdminSidebar />
        </div>

        <div className="col bg-amber-50 w-400">
          <h1 className='text-4xl font-extrabold text-center mt-[35px] me-[25px]'>All Books</h1>

          {/* Tabs */}
          <div className="flex flex-row mt-5">
            <div className="basis-1/4"></div>
            <div className="basis-1/2">
              <div className="flex items-center">
                <p
                  className={`${bookStatus ? 'border-b-0' : 'border-b-2'} border p-3 me-0.5 cursor-pointer`}
                  onClick={() => { setBookStatus(true); setUserStatus(false) }}
                >
                  Book List
                </p>
                <p
                  className={`${userStatus ? 'border-b-0' : 'border-b-2'} border p-3 me-24 cursor-pointer`}
                  onClick={() => getAllUsers(token)}
                >
                  Users
                </p>
              </div>
            </div>
            <div className="basis-1/4"></div>
          </div>

          {/* Content */}
          <div className='flex flex-wrap'>
            {bookStatus ? (
              userBooks.length > 0 ? (
                userBooks.map(item => (
                  <Card
                    className={`flex flex-col items-center bg-amber-100 p-4 m-4 w-72 text-center ${item.status=='sold'?`opacity-50 cursor-not-allowed`:""} `}
                  >
                    <img
                      src={item.imageUrl}
                      className="h-40 w-full object-cover"
                      alt=""
                    />
                    <h5 className="text-xl font-bold text-amber-900 mt-2">
                      {item.title}
                    </h5>
                    <p className="font-normal text-gray-700">
                      Price: ${item.price}
                    </p>
                   {
                    item.status=="pending" &&
                     <button onClick={()=>handleApprove(item)} className="bg-amber-800 text-white px-4 py-2 mt-2 rounded hover:bg-amber-900 hover:text-yellow-200">Approve</button>
                   }
                   {
                    item.status=='sold' &&
                    <img src="https://i.pinimg.com/originals/de/c8/19/dec81905ee90ac935ec2f91e9ece5ad3.jpg" width={'50px'}/>
                   }
                   {
                    item.status=="approved" &&
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbOphQI9Igj8AWWJiPNsSbRmQmKy82WOHhGg&s" width={'30px'} height={'30px'}/>
                   }
                  </Card>
                ))
              ) : (
                <p className="m-5">No books found</p>
              )
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
  {allUsers.length > 0 ? (
    allUsers.map(item => (
      <Card
        key={item._id}
        className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
      >
        {/* <Avatar
          alt={item.username}
          img={item.profile}
          rounded
          size="lg"
          className="mb-3"
        /> */}
        <img src={!item.profile?"https://static.vecteezy.com/system/resources/previews/008/302/462/original/eps10-grey-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg":item.profile.startsWith("http://lh3.googleusercontent.com")?item.profile:`${serverURL}/upload/${item.profile}`} alt="user-icon" referrerPolicy='no-referrer' className='w-10 h-10 rounded-full object-cover'/>
        <h5 className="text-lg font-bold">{item.username}</h5>
        <p className="text-gray-500 text-sm">{item.email}</p>
        <p className="text-xs text-gray-400 mt-2">ID: {item._id}</p>
      </Card>
    ))
  ) : (
    <p className="col-span-full text-center">No users</p>
  )}
</div>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminBooks
