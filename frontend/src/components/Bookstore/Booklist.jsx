import React, { useEffect, useState } from 'react';

import './Booklist.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Booklist = () => {
  
  const [booklist , setBooklist]=useState([]);



  const bookFetch=async()=>{

    try{

        const response=await axios.get("http://localhost:5100/findbook" , booklist);
        console.log(response.data);
        setBooklist(response.data);

    }catch(err){
        console.log(err);
    }
  }


  useEffect(()=>{
     bookFetch();
  })



  // Delete part 

  const Deletebook=async(userId)=>{

    try{

      const response=await axios.delete(`http://localhost:5100/deletebook/${userId}`)
      setBooklist((prev)=>prev.filter(user => user._id !==userId))
      console.log(response);

    }catch(err){
      console.log(err);
    }
  }


  
    return (

    <>

    <div className="booklist">

      <h1>All Booklist Over Here</h1>
      <hr className='line' />

        <div className="bookpart">

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Booktitle</th>
                        <th>Authorname</th>
                        <th>Category</th>
                        <th>Bookpdf</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>

                  {
                    booklist.map((item , index)=>{

                     const { booktitle , authorname , category , bookpdfurl}=item;
                        return(
                            
                            <tr key={index+1}>
                                 <th>{index+1}</th>
                                <th>{booktitle}</th>
                                <th>{authorname}</th>
                                <th>{category}</th>
                                <th><Link>{bookpdfurl.slice(0,25)}</Link></th> 

                                <th>
                                <button className='btn-1' type='submit'><Link to={`/updatebook/${item._id}`} >Edit</Link></button>  
                                <button className='btn-2' type='submit'><Link to={`/deletebook/${item._id}`} onClick={()=>Deletebook(item._id)} >Delete</Link></button>  
                                </th>   
                                
                            </tr>
                        )
                    })
                  }                    
                    
                </tbody>
            </table>
        </div>

        {/* footer part */}

        <Footer/>
    </div>
    
    </>

  )
}

export default Booklist;