import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { Button, Textarea } from "flowbite-react";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  Avatar,
} from "flowbite-react";
import { Label, TextInput } from "flowbite-react";
import { FaLocationDot } from "react-icons/fa6";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
//import { Modal, ModalFooter } from "flowbite-react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';
import { deleteAdminAJobsAPI, getAdminAllJobsAPI, uploadJobAPI } from '../../services/allAPIs';
function AdminBooks() {
  const [jobStatus, setJobStatus] = useState(false)
  const [viewStatus, setViewStatus] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [token, setToken] = useState()

  const [allJobs, setAllJobs] = useState([])

  //To hold Book Details
  const [jobDetails, setJobDetails] = useState({
    title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: ""
  })

  const handleAddJob = async () => {
    const { title, location, jobType, salary, qualification, experience, description } = jobDetails
    console.log(jobDetails);
    if (!title || !location || !jobType || !salary || !qualification || !experience || !description) {
      toast.warn("Please fill the form!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      })
    }
    else {
      //ADD API
      //create request header, includes token
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}` // ✅ Must have Bearer
      }

      try {
        const result = await uploadJobAPI(jobDetails, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Job Added Succesfully !", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          })
          // handleReset()
          getAllJobs(token)
        }
        else {
          toast.error(result.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          })
          // handleReset()
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  }

  const handleReset = async () => {
    setJobDetails({
      title: "", location: "", jobType: "", salary: "", qualification: "", experience: "", description: ""
    })
  }
  const getAllJobs = async (token) => {
    console.log("Get All Jobs");
    console.log(token);

    //create request header, includes token
    const reqHeader = { Authorization: `Bearer ${token}` }
    console.log(reqHeader);

    try {
      const result = await getAdminAllJobsAPI(reqHeader);
      console.log(result);

      console.log(result.data);
      setAllJobs(result.data)

    } catch (err) {
      console.log(err);

    }
  };

  //delete job
const handleDeletejob = async(id, token)=>{
    console.log("Delete Jobs");
    console.log(token);

    //create request header, includes token
    const reqHeader = { Authorization: `Bearer ${token}` }
    console.log(reqHeader);

    try {
      const result = await deleteAdminAJobsAPI(id, reqHeader);
      console.log(result);
      getAllJobs(token)
      alert(result.data)
      
    } catch (err) {
      console.log(err);
  };

  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [])
  console.log(token);

  useEffect(() => {
    if (token) {
      getAllJobs(token); // Now runs only AFTER token is set
    }
  }, [token]);
  console.log(token);

  return (
    <div>
      <AdminHeader />
      <div className="row flex h-150">
        <div className="col flex flex-col items-center">
          <AdminSidebar />
        </div>

        <div className="col bg-amber-50 w-400">
          <h1 className='text-4xl font-extrabold text-center mt-35 me-25'>Careers</h1>
          <div class="flex flex-row mt-5">
            <div class="basis-128"></div>
            <div class="basis-64">
              <div className="flex align-center">
                <p className={jobStatus ? 'border border-r-2 border-l-2 border-t-2 border-b-0 p-3 me-0.5' : 'border border-r-2 border-l-2 border-t-2 border-b-2 p-3 me-0.5'} onClick={() => { setJobStatus(true); setViewStatus(false) }}>Job List</p>
                <p className={viewStatus ? 'border border-r-2 border-l-2 border-t-2 border-b-0 p-3 me-24' : 'border border-r-2 border-l-2 border-t-2 border-b-2 p-3 me-24'} onClick={() => { setJobStatus(false); setViewStatus(true) }} >View Applicant</p>
              </div>
            </div>
            <div class="basis-128"></div>
          </div>
          <div className='flex-row'>
            {
              jobStatus ?
                <div className=''>
                  <div className='flex'>
                    <div className='flex'>
                      <div className="flex items-center justify-center my-10 ms-35">
                        <div className="relative w-full max-w-md">
                          <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-amber-900 rounded-r-lg hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-black"
                          >
                            🔍
                          </button>
                        </div>
                      </div>
                      <div className='mt-9.5 ms-150'>
                        <button className='!bg-amber-800 px-4 py-2 rounded-4xl' onClick={() => setOpenModal(true)}>Add +</button>
                      </div>
                    </div>
                  </div>

                  {
                    allJobs?.length > 0 ? allJobs.map((jobs) => (
                      <div className='shadow bg-amber-200 rounded-lg mx-65 mt-5'>
                        <div className='flex items-center justify-between px-6 py-4'>
                          <div className='basis-1/3'>
                            <h1 className='text-2xl text-center mt-2'>{jobs.title}</h1>
                          </div>
                          <div>
                            <button
                              className='flex items-center gap-2 p-3 text-white bg-amber-900 rounded-lg hover:bg-amber-950 focus:outline-none focus:ring-2 focus:ring-black'
                            onClick={() => handleDeletejob(jobs._id)}>
                              Delete <RiDeleteBin5Line className="ms-1 fs-2" />
                            </button>
                          </div>
                        </div>

                        <hr className='mx-4' />

                        <div className='px-6 py-4'>
                          <p className='flex items-center gap-2 text-ms font-bold'><FaLocationDot /> Location: {jobs.location}</p>
                          <p className='text-ms'>Job type: {jobs.jobType}</p>
                          <p className='text-ms'>Salary: {jobs.salary}</p>
                          <p className='text-ms'>Qualification: {jobs.qualification}</p>
                          <p className='text-ms'>Experience: {jobs.experience}</p>
                          <p className='text-ms'>Description: {jobs.description}</p>
                        </div>
                      </div>
                    )) : "No Openings"
                  }


                  <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <ModalHeader className='!bg-amber-50 text-amber-950'>Application Form</ModalHeader>
                    <ModalBody className='!bg-amber-50  text-amber-950'>
                      <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          <TextInput value={jobDetails.title} onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })} type="text" placeholder='Job Title' color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />
                          <TextInput value={jobDetails.location} onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })} type="text" placeholder='Location' color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />

                          <TextInput value={jobDetails.jobType} onChange={(e) => setJobDetails({ ...jobDetails, jobType: e.target.value })} type="text" placeholder='Job type' color="warning" className='w-100  !bg-amber-50 !text-amber-950 font-extrabold  me-3 my-2' />

                          <TextInput value={jobDetails.salary} onChange={(e) => setJobDetails({ ...jobDetails, salary: e.target.value })} type="text" placeholder='Salary' color="warning" className='w-100  !text-amber-950 font-extrabold ' />
                          <TextInput value={jobDetails.qualification} onChange={(e) => setJobDetails({ ...jobDetails, qualification: e.target.value })} type="text" placeholder='Qualification' color="warning" className='w-100   !text-amber-950 font-extrabold me-3 my-2' />
                          <TextInput value={jobDetails.experience} onChange={(e) => setJobDetails({ ...jobDetails, experience: e.target.value })} type="text" placeholder='Experience ' color="warning" className='w-100   !text-amber-950 font-extrabold ' />
                        </p>
                        <p className="text-base leading-relaxed ">
                          <div className="max-w ">

                            <Textarea value={jobDetails.description} onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })} id="comment" placeholder="Description" color="warning" required rows={4} className='!bg-amber-50  !text-amber-950 font-extrabold ' />
                          </div>        </p>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={handleAddJob}>Add</Button>
                      <Button color="alternative" onClick={handleReset}>
                        Reset
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div> :
                <div className='flex ms-5 mt-15'>

                  <div className="overflow-x-auto mx-10">
                    <Table striped className='mt-10'>
                      <TableHead className='!bg-amber-950'>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>SI</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Job Title</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Name</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Qualification</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Email</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Phone</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Cover Letter</TableHeadCell>
                        <TableHeadCell className='!bg-amber-950 text-amber-100'>Resume</TableHeadCell>
                        <TableHeadCell>
                          <span className="sr-only">Edit</span>
                        </TableHeadCell>
                      </TableHead>
                      <TableBody className="divide-y">
                        <TableRow className="bg-white dark:border-amber-700 dark:bg-amber-800">
                          <TableCell className="whitespace-nowrap font-medium text-amber-900 dark:text-white">
                            1
                          </TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white">Frontend Developer</TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white">Ken</TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white">Btech CS</TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white">ken@gmail.com</TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white">9876543210</TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, quae? Nostrum, ex. Consectetur eum esse eius fugit labore, voluptatum voluptatem excepturi quasi impedit blanditiis est eligendi illum sequi vitae nobis.</TableCell>
                          <TableCell className=" font-medium text-amber-950 dark:text-white"><a href="">Resume</a></TableCell>
                        </TableRow>


                      </TableBody>
                    </Table>
                  </div>

                </div>
            }
          </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default AdminBooks