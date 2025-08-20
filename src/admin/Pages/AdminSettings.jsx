import React, { useEffect, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { Label, Textarea, TextInput } from "flowbite-react";
import { HiLockClosed } from "react-icons/hi";
import { Button } from "flowbite-react";
import { getAdminDetailsAPI, UpdateAdminAPI } from '../../services/allAPIs';

function AdminSettings() {
  const [preview, setPreview] = useState("")
  const [token,setToken]=useState()
  const [adminDetails, setAdminDetails] = useState({
    username: "",
    password: "",
    cpassword: "",
    profile: ""
  })

  const handleFile = (e) => {
    setAdminDetails({ ...adminDetails, profile: e.target.files[0] })
    console.log(adminDetails.profile);

    //obj to url conversion
    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setPreview(url)
    console.log(preview);
    setAdminDetails({ ...adminDetails, profile: url })
  }

  const handleReset = () => {
    setAdminDetails({
      username: "",
      password: "",
      cpassword: "",
      profile: ""
    })
    setPreview("")
  }

  const handleProfileUpdate = async () => {
    console.log(adminDetails);
    const { username, password, cpassword, profile } = adminDetails
    
      if (password !== cpassword) {
        alert("Password mismatched")
      }
      else {
        const reqHeader = {
          Authorization: `Bearer ${token}`
        }
        const reqBody = new FormData()
        //reqBody.append("title",title)
        for (let key in adminDetails) {
          reqBody.append(key, adminDetails[key])
        }
        try {
          const result = await UpdateAdminAPI(reqBody, reqHeader)
          console.log(result);
          setAdminDetails(result.data)
          handleGetAdminDetails(token)
          alert("Updated successfully")

        }
        catch (err) {
console.log(err);

        }
      }
    
  }


const handleGetAdminDetails = async(token)=>{
      console.log("admin details");
      console.log(token);
      const reqHeader = {
        Authorization: `Bearer ${token}`
      }
      try{
        //api call
        const result = await getAdminDetailsAPI(reqHeader)
        console.log(result); 
        setAdminDetails(result.data[0])
        console.log(adminDetails);
        
      }
      catch(err){
        console.log(err);
        
      }   
}


  useEffect(()=>{
    setToken(sessionStorage.getItem("token"))
    if(token){
    handleGetAdminDetails(token)
  }
  },[token])
  
  return (
    <div>
      <AdminHeader />
      <div className="row flex h-150">
        <div className=" flex flex-col items-center">
          <AdminSidebar />
        </div>
        <div className="col bg-amber-50 w-400 pt-35">
          <h1 className='text-center mt-2 font-bold text-3xl me-25'>Settings</h1>
          <div className="flex">
            <div className='basis-150 pt-20 ps-20 '>
              <p className='text-justify mb-10'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus assumenda suscipit, doloribus omnis fuga vero dolorem necessitatibus blanditiis odio autem excepturi fugiat temporibus asperiores explicabo quos? Obcaecati, rerum excepturi?
                Nihil nostrum eligendi error possimus dolores nulla adipisci natus, explicabo sint consequatur provident saepe pariatur. Numquam sed ullam iste cumque qui! Voluptas, repellat perferendis dolorem officia sunt iste culpa sequi.
                Tenetur impedit corrupti culpal </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit dolore nobis! Amet magnam esse aut reiciendis! Vitae odio sunt ullam, aperiam, consequatur repudiandae nesciunt optio provident autem, error Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatem accusantium sed animi veritatis! Laboriosam magnam reprehenderit beatae ratione ad ipsum asperiores. Explicabo quas odio officia ullam consequatur earum </p>
            </div>
            <div className='basis-150 p-10 '>
              <form className="bg-amber-950 rounded p-5 ms-20 pt-5">
                <div className="max-w-md">
                  <div className="md-2">
                    <label htmlFor="profile">
                      <input id='profile' type="file" style={{ display: 'none ' }} onChange={e => handleFile(e)} />
                      <img src={preview ? preview : "https://icon-library.com/images/admin-icon-png/admin-icon-png-18.jpg"} width={'200px'} className="ms-25" alt="" />
                    </label>
                  </div>

                  <div className="mb-2 block">
                    <Label htmlFor="name" className='text-amber-100'>Your Name</Label>
                  </div>
                  <TextInput id="name" type="text" onChange={e => setAdminDetails({ ...adminDetails, username: e.target.value })} value={adminDetails.username} placeholder="John Doe" required />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="email4" className='text-amber-100'>Password</Label>
                  </div>
                  <TextInput id="email" onChange={e => setAdminDetails({ ...adminDetails, password: e.target.value })} value={adminDetails.password} type="password" icon={HiLockClosed} placeholder="password" required />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" className='text-amber-100'>Confirm Password</Label>
                  </div>
                  <TextInput id="email4" onChange={e => setAdminDetails({ ...adminDetails, cpassword: e.target.value })} value={adminDetails.cpassword} type="password" icon={HiLockClosed} placeholder="Re-enter password" required />

                </div>
                <div className='flex justify-evenly my-5'>
                  <Button className='!bg-amber-900 ' onClick={handleReset}>Reset</Button>
                  <Button className='!bg-amber-900' onClick={handleProfileUpdate}>Update</Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings