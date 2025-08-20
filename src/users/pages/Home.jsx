import React, { useContext } from 'react'
import Header from '../components/Header'
import { GiBookshelf } from "react-icons/gi";
import { Card } from 'flowbite-react';
import PageFooter from '../../components/PageFooter';
import { Button } from "flowbite-react";
import { getHomeBookAPI } from '../../services/allAPIs';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContextShare';
import { ToastContainer, toast } from 'react-toastify';
function Home() {
  const navigate = useNavigate()
    const{searchKey,setSearchKey}=useContext(SearchContext)
    console.log(searchKey);
  //to hold homebooks
  const[homeBooks,setHomeBooks] = useState([])
const[token,setToken]=useState("")
  const getHomeBooks = async()=>{
    try{
      const result = await getHomeBookAPI()
      console.log(result);
      setHomeBooks(result.data)
    }
    catch(err){
      console.log(err);
      
    }
  }
  console.log(homeBooks);
  
const handleSearch=()=>{
  //alert("searching")
  const token = sessionStorage.getItem("token")
  if(searchKey==""){
    //alert("Please enter a book name!")
   toast.warn("Please enter a book name!",{
   position: "top-center",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: false,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   // transition: Bounce,
   })
  }
  else if(!token){
    //alert("Please login!")
    toast.warn("Please login!",{
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
    })
navigate('/')
  }
  else if(searchKey && token){
  navigate('/allBooks')
  }
  else{
    alert("Something went wrong")
  }
}

  useEffect(()=>{
    getHomeBooks()
  },[])
  return (
    <div>
     <Header/>
     <section id='banner' className="bg-[url('https://cdn.pixabay.com/photo/2022/10/16/19/39/teacup-7526022_1280.jpg')] bg-cover bg-top bg-fixed h-screen">
     <div className='text-center p-6 pt-60'>
      <h1 className='text-3xl  mt-10 px-60 !text-amber-500 hover:!text-amber-200'>That's the thing about books. They let you travel without moving your feet.</h1>
      <p className='pt-4 !text-amber-200'>Your trusted destination for buying and selling pre-loved books.</p>


       <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 mx-90 mt-5 !bg-amber-100">
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6"><GiBookshelf className='fs-1' /></div>
          <input
          value={searchKey}
                  onChange={e=>setSearchKey(e.target.value)}
            id="book"
            name="book"
            type="text"
            placeholder="CHOOSE YOUR BOOK"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
<Button  className="flex flex-wrap gap-2 !bg-amber-950" onClick={handleSearch}>Search</Button>
         </div>
         </div> 

     </div>
     

     </section>

<section className="bg-amber-50 p-6">
        <div className="flex items-stretch justify-center">
          <div className="py-4"></div>
          <div className="py-12 text-center">
            <p className="text-4xl !text-amber-950">NEW ARRIVALS</p>
            <p className="text-2xl !text-amber-950">Explore Our Latest Collection</p>
          </div>
          <div className="py-2"></div>
        </div>

        <div className="flex items-stretch justify-evenly ">
          {
            homeBooks?.length>0?
            homeBooks.map(item=>(
              <div className="py-4">
            <Card className=" flex flex-wrap !bg-amber-100 h-100 w-70 p-2 text-center"   horizontal>
            <img src={item.imageUrl} className="h-70 pt-10 w-80 p-2 object-cover" alt="" />
              <h5 className="text-xl text-wrap font-bold tracking-tight text-amber-900">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 pb-4">
               Price : ${item.dprice}
              </p>
            </Card>
          </div> 
            ))
            :
            "No Book Found"
          }
          
        </div>
        <div className="text-center m-4">
        {
          token ?
            <Link to={"/allBooks"}>
          <button className="bg-amber-950 text-amber-100 border-2 rounded-4xl p-3">Explore More</button>
          </Link>:  <Link to={"/login"}>
          <button className="bg-amber-950 text-amber-100 border-2 rounded-4xl p-3">Explore More</button>
          </Link>
        }
        </div>

      </section>
     <section className="bg-amber-100 p-10">
        <div className="flex justify-evenly">
          <div className="p-5 flex flex-col w-200">
            <p className="text-4xl">FEATURED AUTHORS</p>
            <p className="text-5xl text-wrap mb-5">Shakespeare, Poet</p>
            <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem autem numquam quam delectus ullam earum ab soluta non ipsum, quos explicabo? Fugit dolores qui tenetur optio tempora inventore cum molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas itaque dolorem placeat quisquam, dolorum assumenda incidunt quis dolore voluptas tenetur aspernatur explicabo a error delectus ad ipsam. Numquam, sit obcaecati.
           </p>
           <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda non hic harum doloremque maxime aut vitae necessitatibus soluta officiis modi, repellat quidem dolorem libero vero! Beatae esse perspiciatis quidem eveniet!
           Beatae voluptatum hic unde facere nihil soluta deleniti quos officia obcaecati distinctio repudiandae excepturi delectus tenetur nam suscipit dolores amet, voluptates fugiat sequi, tempore dolorum. Unde fugit libero dolores ducimus!
           Odio laboriosam placeat quaerat earum distinctio neque ipsa maxime id corporis optio eaque enim nulla fugiat dolorem est sapiente, aspernatur repellendus sint sequi porro quam amet veniam dolores! Ut, ullam!</p>
            
          </div>
          <div className="p-5">
            <img src="https://cdn.pixabay.com/photo/2012/11/28/11/10/shakespeare-67698_1280.jpg" alt="" width={'350px'} height={'500px'} />
          </div>
          
        </div>
      </section>


 <section className="bg-amber-50 p-6 text-center">
                <p className="text-4xl">TESTIMONIALS </p>
                <p className="text-4xl">See What Others Are Saying</p>

       

        <div class="flex items-stretch justify-evenly  ">
          <div class="py-4">
            <Card
              className=" flex flex-wrap !bg-amber-50 h-100 w-100 p-15   text-center"
              horizontal
            >
              <img
                src="https://cdn.pixabay.com/photo/2018/07/12/18/15/man-3534091_1280.jpg"
                className="h-80 w-80 p-2 "
                alt=""
                width={'50px'}
                height={'50px'}
              />
              <h5 className=" text-wrap font-bold tracking-tight text-amber-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem natus debitis, id quia reiciendis consequuntur accusantium laborum magnam, aliquid maxime distinctio eaque minima labore. Commodi quidem ex magnam quae?
              </h5>
              
            </Card>
          </div>
          
          
        </div>
      </section>
    <PageFooter/>
      <ToastContainer />
    </div>
  )
}

export default Home
